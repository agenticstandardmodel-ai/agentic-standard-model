import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import YAML from 'yaml';

export type FigureMeta = {
  id: string;
  chapter: number;
  title: string;
  caption: string;
  type: 'interactive' | 'static' | 'reference';
  embed_mode: 'iframe' | 'native';
  source_path: string;
  share_path: string;
  accessibility_summary: string;
};

export type BondMeta = {
  type: string;
  notation: string;
  meaning: string;
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
