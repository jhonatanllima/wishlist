import { normalizeFilterOfSearch } from '~/utils/normalizeFilterOfSearch';

describe('normalizeFilterOfSearch', () => {
  it('should render the correctly', () => {
    expect(
      normalizeFilterOfSearch('Testando a função normalizeFilterOfSearch')
    ).toBe('testandoafuncaonormalizefilterofsearch');
  });
});
