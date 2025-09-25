const express = require('express');
const EmbeddingService = require('../services/embedding-service');
const SearchService = require('../services/search-service');

const router = express.Router();

const embeddingService = new EmbeddingService();
const searchService = new SearchService(128, 10000); // This should be a singleton

router.get('/', async (req, res) => {
  const { q } = req.query;
  const embedding = await embeddingService.generate(q);
  const results = searchService.search(embedding, 5);

  res.status(200).json(results);
});

module.exports = router;
