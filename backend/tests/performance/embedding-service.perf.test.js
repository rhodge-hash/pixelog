const EmbeddingService = require('../../src/services/embedding-service');

describe('EmbeddingService Performance', () => {
  let embeddingService;
  const testContent = 'This is a test sentence for performance measurement.';
  const largeContent = 'a'.repeat(1024 * 1024); // 1MB content

  beforeAll(async () => {
    embeddingService = new EmbeddingService();
    await embeddingService.initializeModel();
  });

  test('should measure latency for small content embedding generation', async () => {
    const startTime = process.hrtime.bigint();
    await embeddingService.generateEmbedding(testContent);
    const endTime = process.hrtime.bigint();
    const latencyMs = Number(endTime - startTime) / 1_000_000;

    console.log(`Small content embedding latency: ${latencyMs.toFixed(2)} ms`);
    expect(latencyMs).toBeLessThan(500); // Example threshold: less than 500ms
  });

  test('should measure latency for large content embedding generation (with chunking/batching placeholder)', async () => {
    const startTime = process.hrtime.bigint();
    await embeddingService.generateEmbedding(largeContent); // Placeholder for chunking/batching
    const endTime = process.hrtime.bigint();
    const latencyMs = Number(endTime - startTime) / 1_000_000;

    console.log(`Large content embedding latency: ${latencyMs.toFixed(2)} ms`);
    expect(latencyMs).toBeLessThan(2000); // Example threshold: less than 2000ms for 1MB
  });

  test('should measure throughput for embedding generation', async () => {
    const numIterations = 100;
    const contents = Array(numIterations).fill(testContent);

    const startTime = process.hrtime.bigint();
    for (let i = 0; i < numIterations; i++) {
      await embeddingService.generateEmbedding(contents[i]);
    }
    const endTime = process.hrtime.bigint();
    const totalTimeMs = Number(endTime - startTime) / 1_000_000;
    const throughputPerSecond = (numIterations / totalTimeMs) * 1000;

    console.log(`Throughput: ${throughputPerSecond.toFixed(2)} embeddings/second`);
    expect(throughputPerSecond).toBeGreaterThan(10); // Example threshold: more than 10 embeddings/second
  });
});
