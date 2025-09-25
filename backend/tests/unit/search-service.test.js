const SearchService = require("../../src/services/search-service");
const EmbeddingService = require("../../src/services/embedding-service"); // Import EmbeddingService

describe("SearchService", () => {
  it("should add a point and search for it", async () => { // Make it async
    const mockEmbeddingService = new EmbeddingService(); // Create a mock instance
    // Mock generateEmbedding to return a fixed-size array
    mockEmbeddingService.generateEmbedding = jest.fn().mockResolvedValue(new Array(384).fill(0));

    const searchService = new SearchService(384, 10, mockEmbeddingService); // Pass mockEmbeddingService
    const content = "test content"; // Change point to content
    const label = 1;

    await searchService.addPoint(content, label); // Await addPoint
    const results = await searchService.search(content, 1); // Await search

    expect(results.neighbors).toEqual([label]);
  });
});
