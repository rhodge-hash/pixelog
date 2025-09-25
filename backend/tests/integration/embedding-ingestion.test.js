const request = require('supertest');
const express = require('express');
const assetsRouter = require('../../src/api/assets'); // Assuming the router is here
const KnowledgeAsset = require('../../src/models/knowledge-asset'); // Assuming the model is here

// Mock the KnowledgeAsset model to prevent actual database interaction for now
jest.mock('../../src/models/knowledge-asset', () => ({
  create: jest.fn((data) => ({ ...data, id: 'mock-asset-id', embedding: data.embedding || null })),
  findById: jest.fn((id) => {
    if (id === 'mock-asset-id') {
      return {
        id: 'mock-asset-id',
        title: 'Test Document',
        content: 'This is a test document for embedding generation.',
        embedding: new Array(384).fill(0).map(() => Math.random()), // Mock a valid embedding
      };
    }
    return null;
  }),
}));

// Mock the EmbeddingService to control its behavior
jest.mock('../../src/services/embedding-service', () => {
  return jest.fn().mockImplementation(() => {
    return {
      initializeModel: jest.fn().mockResolvedValue(undefined),
      generateEmbedding: jest.fn().mockResolvedValue(new Array(384).fill(0).map(() => Math.random())),
    };
  });
});

const app = express();
app.use(express.json());
app.use('/assets', assetsRouter);

describe('Embedding Ingestion Integration', () => {
  beforeEach(() => {
    // Clear mocks before each test
    KnowledgeAsset.create.mockClear();
    KnowledgeAsset.findById.mockClear();
  });

  test('should ingest a new asset and store its embedding', async () => {
    const assetData = {
      title: 'Test Document',
      content: 'This is a test document for embedding generation.',
    };

    // Simulate asset ingestion
    const response = await request(app)
      .post('/assets')
      .send(assetData)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toBe('mock-asset-id');

    // Verify that KnowledgeAsset.create was called with an embedding
    expect(KnowledgeAsset.create).toHaveBeenCalledWith(
      expect.objectContaining({
        title: assetData.title,
        content: assetData.content,
        embedding: expect.arrayContaining(new Array(384).fill(expect.any(Number))),
      }),
    );

    // Simulate retrieving the asset and verifying the embedding
    const retrievedAsset = await KnowledgeAsset.findById('mock-asset-id');
    expect(retrievedAsset).toBeDefined();
    expect(retrievedAsset.embedding).toBeInstanceOf(Array);
    expect(retrievedAsset.embedding).toHaveLength(384);
  });
});
