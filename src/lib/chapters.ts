export const chapterAccents: Record<number, string> = {
  0: '#c58b2a',
  1: '#8a8a8a',
  2: '#378ADD',
  3: '#D85A30',
  4: '#FAC775',
  5: '#1D9E75',
  6: '#639922',
  7: '#7F77DD'
};

export const statusLabels: Record<string, string> = {
  placeholder: 'Coming Soon',
  draft: 'In Development',
  published: 'Published'
};

export function chapterLabel(title: string, chapterNumber: number): string {
  if (chapterNumber === 0) {
    return title;
  }
  return title.replace(`Chapter ${chapterNumber}: `, '');
}

export function chapterEyebrow(chapterNumber: number): string {
  return chapterNumber === 0 ? 'Preface' : `Chapter ${chapterNumber.toString().padStart(2, '0')}`;
}

export function chapterNavLabel(title: string, chapterNumber: number): string {
  return chapterNumber === 0
    ? 'Preface'
    : `Chapter ${chapterNumber.toString().padStart(2, '0')} · ${chapterLabel(title, chapterNumber)}`;
}

export function chapterSlugFromNumber(chapterNumber: number): string {
  const map: Record<number, string> = {
    0: 'preface',
    1: 'chapter-1-foundations',
    2: 'chapter-2-periodic-table',
    3: 'chapter-3-chemistry-layer',
    4: 'chapter-4-force-laws',
    5: 'chapter-5-cell-model',
    6: 'chapter-6-open-problems',
    7: 'chapter-7-larger-question'
  };

  return map[chapterNumber] || 'chapter-1-foundations';
}
