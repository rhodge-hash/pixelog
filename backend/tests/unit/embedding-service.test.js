const EmbeddingService = require('../../src/services/embedding-service');

describe('EmbeddingService', () => {
  it('should generate an embedding', async () => {
    const embeddingService = new EmbeddingService();
    const content = 'test content';
    const embedding = await embeddingService.generate(content);

    expect(embedding).toBeInstanceOf(Array);
    expect(embedding.length).toBe(128);
  });
});
