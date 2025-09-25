// backend/tests/contract/embedding-service.test.js
const EmbeddingService = require("../../src/services/embedding-service");

describe("EmbeddingService Internal Contract", () => {
  let embeddingService;

  beforeAll(() => {
    embeddingService = new EmbeddingService();
  });

  test('generateEmbedding should return a promise that resolves to an array of 384 numbers', async () => {
    const data = 'test data';
    const result = embeddingService.generateEmbedding(data);
    await expect(result).resolves.toBeInstanceOf(Array);
    await expect(result).resolves.toHaveLength(384); // This will make it fail initially
  });

  test('initializeModel should return a promise that resolves', async () => {
    const result = embeddingService.initializeModel();
    await expect(result).resolves.toBeUndefined(); // This will make it fail initially if it's not resolving to undefined
  });
});
