const { HierarchicalNSW } = require('hnswlib-node');

class SearchService {
  constructor(dim, maxElements) {
    this.dim = dim;
    this.maxElements = maxElements;
    this.index = new HierarchicalNSW('l2', this.dim);
    this.index.initIndex(this.maxElements);
  }

  addPoint(point, label) {
    this.index.addPoint(point, label);
  }

  search(point, k) {
    return this.index.searchKnn(point, k);
  }
}

module.exports = SearchService;
