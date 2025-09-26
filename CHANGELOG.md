# Changelog

## 0.2.0 - 2025-09-26

### Added

- Data Storage and Encryption Feature:
  - `MetadataService` for managing metadata and embeddings in SQLite.
  - `StorageService` enhanced with `saveEncrypted`, `loadAndDecrypt`, and `deleteAsset` methods using AES-256-GCM encryption.
  - `KnowledgeAsset` model updated to include `encryptedContentPath`.
  - Contract, unit, and integration tests for `MetadataService` and `StorageService`.

### Changed

- `EmbeddingService` now uses Google Generative AI API (`text-embedding-004`) for actual embedding generation, including chunking and batching for large inputs.
- All relevant tests updated to expect 768-dimension embeddings.
- `backend/src/api/assets.js` and `backend/src/api/search.js` updated to integrate `EmbeddingService`, `MetadataService`, and `StorageService`.
- `README.md` updated with a "Current Project Status" section and a link to `roadmap.md`.
- Moved "Further Implementation Steps" from `README.md` to `roadmap.md`.

### Fixed

- Resolved `TypeError: EmbeddingService is not a constructor` by exporting both the class and a singleton instance.
- Resolved `SyntaxError: Unexpected token 'export'` from `uuid` by mocking `uuid` globally.
- Resolved `GEMINI_API_KEY environment variable not set.` errors by setting a mock API key in Jest setup.
- Resolved `EmbeddingService not initialized` errors in tests by calling `initializeModel()` in `beforeAll` or `beforeEach`.
- Resolved `TypeError: KnowledgeAsset is not a constructor` in integration tests by correctly mocking `KnowledgeAsset`.
- Resolved `TypeError: Cannot read properties of undefined (reading 'addPoint')` in integration tests by correctly mocking `SearchService`.

## 0.1.0 - 2025-09-25

### Added

- Initial implementation of Embedding Service:
  - `EmbeddingService` with `initializeModel()` and `generateEmbedding()` placeholder methods.
  - `KnowledgeAsset` model updated to include `embedding` field.
  - `SearchService` modified to utilize `EmbeddingService`.
  - Contract, unit, and performance tests for `EmbeddingService`.

### Changed

- Updated `README.md` to reflect Embedding Service progress.
- Updated backend ESLint configuration to `eslint.config.js` for ESLint v9 compatibility.
- Downgraded `uuid` package to `3.4.0` for CommonJS compatibility in tests.
- Updated `jest.config.js` and `.babelrc` for Jest to handle ES Modules.

### Fixed

- Resolved `SyntaxError` in `backend/src/services/embedding-service.js` due to an extra closing brace.
- Fixed `TypeError: Cannot read properties of undefined (reading 'generateEmbedding')` in `SearchService` unit tests.
- Fixed `tests/unit/embedding-service.test.js` to expect correct embedding length (384).