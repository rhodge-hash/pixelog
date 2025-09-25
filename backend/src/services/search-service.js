const { HierarchicalNSW } = require("hnswlib-node");
const EmbeddingService = require("./embedding-service"); // Import EmbeddingService

class SearchService {
  constructor(dim, maxElements, embeddingService) { // Accept EmbeddingService instance
    this.dim = dim;
    this.maxElements = maxElements;
    this.index = new HierarchicalNSW("l2", this.dim);
    this.index.initIndex(this.maxElements);
    this.embeddingService = embeddingService; // Store EmbeddingService instance
  }

  async addPoint(content, label) { // Accept content instead of point
    const embedding = await this.embeddingService.generateEmbedding(content); // Generate embedding
    this.index.addPoint(embedding, label);
  }

  async search(query, k) { // Accept query instead of point
    const queryEmbedding = await this.embeddingService.generateEmbedding(query); // Generate embedding for query
    return this.index.searchKnn(queryEmbedding, k);
  }
}

module.exports = SearchService;
