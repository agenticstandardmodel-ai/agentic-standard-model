import type { APIRoute } from 'astro';

type ContributionType = 'stress' | 'molecule' | 'violation';

const allowedFields = new Set([
  'name',
  'email',
  'type',
  'title',
  'affiliation',
  'context',
  'stress_system',
  'stress_reduction',
  'stress_candidate',
  'mol_system',
  'mol_formula',
  'mol_notes',
  'viol_failure',
  'viol_channel',
  'viol_prediction',
  'company',
  'page_url',
  'form_loaded_at'
]);

const fieldLimits: Record<string, number> = {
  name: 120,
  email: 160,
  title: 160,
  affiliation: 220,
  context: 3000,
  stress_system: 4000,
  stress_reduction: 4000,
  stress_candidate: 220,
  mol_system: 4000,
  mol_formula: 5000,
  mol_notes: 3000,
  viol_failure: 4000,
  viol_channel: 80,
  viol_prediction: 4000,
  company: 120,
  page_url: 400,
  form_loaded_at: 40
};

const typeRequirements: Record<ContributionType, string[]> = {
  stress: ['stress_system', 'stress_reduction'],
  molecule: ['mol_system', 'mol_formula'],
  violation: ['viol_failure', 'viol_channel', 'viol_prediction']
};

const typeLabels: Record<ContributionType, string> = {
  stress: 'Missing Element Challenge',
  molecule: 'Molecule Submission',
  violation: 'Force-Law Violation'
};

const violationChannels = new Set([
  'mc-wrong',
  'a2-wrong',
  'a3-missing',
  'intent-chain',
  'authority-scope',
  'other'
]);

const recentSubmissions = new Map<string, number>();
const MAX_TOTAL_TEXT_LENGTH = 18000;
const MIN_FORM_AGE_MS = 1500;
const MAX_FORM_AGE_MS = 1000 * 60 * 60 * 24 * 7;
const RATE_LIMIT_WINDOW_MS = 1000 * 60;
const DEFAULT_CONTRIBUTION_TO_EMAIL = 'contribute@agenticstandardmodel.ai';

const json = (status: number, payload: Record<string, unknown>) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });

const sanitize = (value: string) =>
  value
    .replace(/\r\n?/g, '\n')
    .replace(/\u0000/g, '')
    .trim();

const getEnv = (
  context: Parameters<NonNullable<APIRoute>>[0],
  key: string
) => {
  const runtimeEnv = (context.locals as { runtime?: { env?: Record<string, string | undefined> } } | undefined)?.runtime?.env;
  const importMetaEnv = ((import.meta as { env?: Record<string, string | undefined> }).env ?? {});
  const processEnv = typeof process !== 'undefined' ? process.env : undefined;

  return runtimeEnv?.[key] ?? importMetaEnv[key] ?? processEnv?.[key];
};

const readIp = (request: Request) => {
  const forwarded = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '';
  return forwarded.split(',')[0]?.trim() || 'unknown';
};

const cleanupRateLimit = (now: number) => {
  for (const [ip, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > RATE_LIMIT_WINDOW_MS) {
      recentSubmissions.delete(ip);
    }
  }
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const formatSection = (label: string, value?: string) => {
  if (!value) return null;
  return `${label}:\n${value}`;
};

export const POST: APIRoute = async (context) => {
  const { request } = context;
  const now = Date.now();
  cleanupRateLimit(now);

  const ip = readIp(request);
  const lastSubmissionAt = recentSubmissions.get(ip);
  if (lastSubmissionAt && now - lastSubmissionAt < RATE_LIMIT_WINDOW_MS) {
    return json(429, {
      ok: false,
      error: 'Please wait a minute before sending another contribution.'
    });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return json(400, {
      ok: false,
      error: 'Invalid submission payload.'
    });
  }

  const payload: Record<string, string> = {};
  for (const [key, rawValue] of formData.entries()) {
    if (!allowedFields.has(key)) {
      return json(400, {
        ok: false,
        error: `Unexpected field received: ${key}`
      });
    }

    if (typeof rawValue !== 'string') {
      return json(400, {
        ok: false,
        error: 'File uploads are not supported for contributions.'
      });
    }

    payload[key] = sanitize(rawValue);
  }

  if (payload.company) {
    return json(200, { ok: true });
  }

  let totalLength = 0;
  for (const [key, value] of Object.entries(payload)) {
    const limit = fieldLimits[key];
    if (limit && value.length > limit) {
      return json(400, {
        ok: false,
        error: `The field "${key}" exceeds its maximum length.`
      });
    }
    totalLength += value.length;
  }

  if (totalLength > MAX_TOTAL_TEXT_LENGTH) {
    return json(413, {
      ok: false,
      error: 'Submission is too large. Please shorten the text and try again.'
    });
  }

  const loadedAt = Number(payload.form_loaded_at || '0');
  if (!Number.isFinite(loadedAt) || loadedAt <= 0) {
    return json(400, {
      ok: false,
      error: 'Submission metadata is missing. Reload the page and try again.'
    });
  }

  const formAge = now - loadedAt;
  if (formAge < MIN_FORM_AGE_MS) {
    return json(400, {
      ok: false,
      error: 'Submission was sent too quickly. Please review the form and try again.'
    });
  }

  if (formAge > MAX_FORM_AGE_MS) {
    return json(400, {
      ok: false,
      error: 'This form has been open too long. Reload the page and submit again.'
    });
  }

  const type = payload.type as ContributionType | undefined;
  if (!type || !(type in typeRequirements)) {
    return json(400, {
      ok: false,
      error: 'A valid contribution type is required.'
    });
  }

  const requiredCommonFields = ['name', 'email', 'title'] as const;
  for (const field of requiredCommonFields) {
    if (!payload[field]) {
      return json(400, {
        ok: false,
        error: `The field "${field}" is required.`
      });
    }
  }

  if (!isValidEmail(payload.email)) {
    return json(400, {
      ok: false,
      error: 'Enter a valid email address.'
    });
  }

  for (const field of typeRequirements[type]) {
    if (!payload[field]) {
      return json(400, {
        ok: false,
        error: `The field "${field}" is required for this contribution type.`
      });
    }
  }

  if (payload.viol_channel && !violationChannels.has(payload.viol_channel)) {
    return json(400, {
      ok: false,
      error: 'Invalid violation channel.'
    });
  }

  const contributionToEmail = getEnv(context, 'CONTRIBUTION_TO_EMAIL') || DEFAULT_CONTRIBUTION_TO_EMAIL;
  const emailApiKey = getEnv(context, 'EMAIL_API_KEY');
  const emailFrom = getEnv(context, 'EMAIL_FROM');
  const emailApiUrl = getEnv(context, 'EMAIL_API_URL') || 'https://api.resend.com/emails';

  if (!emailApiKey || !emailFrom) {
    return json(503, {
      ok: false,
      error: 'Contribution delivery is not configured yet. Please try again later.'
    });
  }

  recentSubmissions.set(ip, now);

  const subject = `[ASM Contribution] ${type.toUpperCase()}: ${payload.title}`;
  const submittedAt = new Date(now).toISOString();
  const text = [
    `CONTRIBUTION TYPE: ${typeLabels[type]}`,
    `TITLE: ${payload.title}`,
    `FROM: ${payload.name} (${payload.email})`,
    payload.affiliation ? `AFFILIATION: ${payload.affiliation}` : null,
    `SUBMITTED: ${submittedAt}`,
    `SOURCE PAGE: ${payload.page_url || 'unknown'}`,
    `IP: ${ip}`,
    `USER AGENT: ${request.headers.get('user-agent') || 'unknown'}`,
    '',
    '---',
    '',
    formatSection('SYSTEM OR PATTERN DESCRIPTION', payload.stress_system),
    formatSection('REDUCTION ATTEMPT', payload.stress_reduction),
    formatSection('CANDIDATE NEW ELEMENT', payload.stress_candidate),
    formatSection('SYSTEM DESCRIPTION', payload.mol_system),
    formatSection('MOLECULAR FORMULA', payload.mol_formula),
    formatSection('STRUCTURAL NOTES', payload.mol_notes),
    formatSection('FAILURE DESCRIPTION', payload.viol_failure),
    formatSection('INTERACTION CHANNEL USED', payload.viol_channel),
    formatSection('FRAMEWORK PREDICTION VS OBSERVED FAILURE', payload.viol_prediction),
    formatSection('ADDITIONAL CONTEXT', payload.context)
  ]
    .filter(Boolean)
    .join('\n\n');

  try {
    const response = await fetch(emailApiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${emailApiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [contributionToEmail],
        subject,
        text
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Contribution email delivery failed', response.status, errorBody);
      recentSubmissions.delete(ip);

      return json(502, {
        ok: false,
        error: 'The contribution could not be delivered. Please try again in a few minutes.'
      });
    }

    return json(200, {
      ok: true,
      message: 'Contribution received.'
    });
  } catch (error) {
    console.error('Contribution email request failed', error);
    recentSubmissions.delete(ip);

    return json(502, {
      ok: false,
      error: 'The contribution could not be delivered. Please try again in a few minutes.'
    });
  }
};

export const GET: APIRoute = async () =>
  json(405, {
    ok: false,
    error: 'Method not allowed.'
  });
