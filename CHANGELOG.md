# Changelog

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
