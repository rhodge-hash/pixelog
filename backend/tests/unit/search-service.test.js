const SearchService = require('../../src/services/search-service');

describe('SearchService', () => {
  it('should add a point and search for it', () => {
    const searchService = new SearchService(2, 10);
    const point = [1, 2];
    const label = 1;

    searchService.addPoint(point, label);
    const results = searchService.search(point, 1);

    expect(results.neighbors).toEqual([label]);
  });
});
