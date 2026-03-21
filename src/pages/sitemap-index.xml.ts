import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getFigures } from '../lib/data';

export const GET: APIRoute = async ({ site }) => {
  const base = site ? site.origin : 'https://agenticstandardmodel.ai';

  const chapters = (await getCollection('chapters')).sort(
    (a, b) => a.data.chapter_number - b.data.chapter_number
  );
  const figures = getFigures();

  const urls = [
    `${base}/`,
    ...chapters.map((chapter) => `${base}/${chapter.slug}/`),
    ...figures.map((figure) => `${base}/figures/${figure.id}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `  <url><loc>${url}</loc></url>`)
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
