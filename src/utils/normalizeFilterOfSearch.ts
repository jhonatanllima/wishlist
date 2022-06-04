export function normalizeFilterOfSearch(valueSearch: string) {
  return valueSearch
    .normalize('NFD')
    .replace(/[^a-zA-Zs]/g, '')
    .toLowerCase();
}
