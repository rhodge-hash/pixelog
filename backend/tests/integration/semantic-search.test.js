const request = require('supertest');
const express = require('express');
const searchRouter = require('../../src/api/search');
const KnowledgeAsset = require('../../src/models/knowledge-asset');

// Mock KnowledgeAsset model
jest.mock('../../src/models/knowledge-asset', () => ({
  findSimilar: jest.fn(() => [
    {
      id: 'asset-1',
      title: 'Document about embeddings',
      content: 'This document discusses various aspects of embeddings.',
      embedding: new Array(384).fill(0).map(() => Math.random()),
    },
  ]),
}));

// Mock EmbeddingService
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
app.use('/search', searchRouter);

describe('Semantic Search Integration', () => {
  beforeEach(() => {
    KnowledgeAsset.findSimilar.mockClear();
  });

  test('should perform a semantic search and return relevant results', async () => {
    const searchQuery = 'documents about embedding';
    const response = await request(app)
      .get(`/search?query=${encodeURIComponent(searchQuery)}`)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('title');
    expect(response.body[0]).toHaveProperty('content');

    // Verify that findSimilar was called
    expect(KnowledgeAsset.findSimilar).toHaveBeenCalledWith(
      expect.arrayContaining(new Array(384).fill(expect.any(Number))), // Expecting an embedding
      expect.any(Number), // Expecting a limit
    );
  });
});
