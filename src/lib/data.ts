import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import YAML from 'yaml';

export type FigureMeta = {
  id: string;
  chapter: number;
  label: string;
  title: string;
  caption: string;
  type: 'interactive' | 'static' | 'reference';
  embed_mode: 'iframe' | 'native';
  source_path: string;
  share_path: string;
  accessibility_summary: string;
  legend_overview: string;
  legend_how_to_read: string;
  legend_why_it_matters: string;
  legend_callouts: string[];
};

export type BondMeta = {
  type: string;
  label: string;
  notation: string;
  meaning: string;
  stroke_style: string;
  accent_color: string;
};

export type ElementMeta = {
  symbol: string;
  name: string;
  number: number | string;
  group: string;
  period: string;
  kind: 'element' | 'boson' | 'predicted-gap';
  description: string;
  current_instantiation?: string;
};

export type MoleculeMeta = {
  id: string;
  name: string;
  status: 'confirmed' | 'predicted';
  formula: string;
  summary: string;
  defining_constraint: string;
  predicted_property: string;
  diagram_id: string;
  diagram_status: 'ready' | 'placeholder';
  notes: string;
  implementation_examples: string[];
  chapter_link: string;
};

export type MoleculeReferenceMeta = {
  id: string;
  name: string;
  label: string;
  formula: string;
  summary: string;
  diagram_id: string;
  notes: string;
};

function readYaml<T>(relativePath: string): T {
  const raw = readFileSync(resolve(process.cwd(), 'src', 'data', relativePath), 'utf8');
  return YAML.parse(raw) as T;
}

export function getFigures(): FigureMeta[] {
  return readYaml<FigureMeta[]>('figures.yml');
}

export function getFigureMap(): Map<string, FigureMeta> {
  return new Map(getFigures().map((figure) => [figure.id, figure]));
}

export function getBonds(): BondMeta[] {
  return readYaml<BondMeta[]>('bonds.yml');
}

export function getElements(): ElementMeta[] {
  return readYaml<ElementMeta[]>('elements.yml');
}

export function getMolecules(): MoleculeMeta[] {
  return readYaml<MoleculeMeta[]>('molecules.yml');
}

export function getMoleculeReferences(): MoleculeReferenceMeta[] {
  return readYaml<MoleculeReferenceMeta[]>('molecule-references.yml');
}
