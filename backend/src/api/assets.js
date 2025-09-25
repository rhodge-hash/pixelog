const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const KnowledgeAsset = require('../models/knowledge-asset');
const StorageService = require('../services/storage-service');
const EmbeddingService = require('../services/embedding-service');
const SearchService = require('../services/search-service');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const storageService = new StorageService('./data');
const embeddingService = new EmbeddingService();
const searchService = new SearchService(128, 10000);

router.post('/', upload.single('file'), async (req, res) => {
  const { buffer, originalname } = req.file;
  const id = uuidv4();
  const type = 'file'; // Simplified for now

  const embedding = await embeddingService.generate(buffer);
  const encrypted_content_path = await storageService.save(id, buffer);

  const asset = new KnowledgeAsset(id, type, encrypted_content_path, { originalname });
  searchService.addPoint(embedding, id);

  res.status(201).json(asset);
});

module.exports = router;
