# Tasks: Embedding Service Implementation

**Input**: Design documents from `/home/roy/Desktop/pixelog/specs/002-embedding-service-implementation/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Phase 3.1: Setup
- [X] T001 Install backend dependencies in `backend/`
- [X] T002 [P] Configure linting and formatting tools for `backend/`

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [X] T003 [P] Verify contract test `backend/tests/contract/embedding-service.test.js` exists and fails for `generateEmbedding` and `initializeModel` methods.
- [X] T004 [P] Write integration test for ingesting a new knowledge asset and verifying embedding storage as described in `quickstart.md`.
- [X] T005 [P] Write integration test for performing a semantic search and getting relevant results as described in `quickstart.md`.

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [X] T006 Update `backend/src/models/knowledge-asset.js` to include the `embedding` field (type: `[Number]`, dimension: 384, dtype: `float32`).
- [X] T007 Implement `initializeModel()` in `backend/src/services/embedding-service.js` to load and initialize the embedding model.
- [X] T008 Implement `generateEmbedding(data)` in `backend/src/services/embedding-service.js` to generate vector embeddings, including chunking and batching for large assets.
- [X] T009 Modify `backend/src/services/search-service.js` to utilize `EmbeddingService` for indexing and query processing.

## Phase 3.4: Integration
- [X] T010 Ensure database schema supports the new `embedding` field in the `KnowledgeAsset` model.

## Phase 3.5: Polish
- [X] T011 [P] Write unit tests for `backend/src/services/embedding-service.js` covering `generateEmbedding` and `initializeModel`.
- [X] T012 [P] Write performance tests for `EmbeddingService` covering embedding generation latency and throughput.
- [X] T013 Update relevant documentation (e.g., API docs, README) with details about the Embedding Service.

## Dependencies
- T001, T002 must be completed before T003-T013.
- T003, T004, T005 must be completed and failing before T006-T010.
- T006 must be completed before T008.
- T007 must be completed before T008.
- T008 must be completed before T009.
- T009 must be completed before T010.
- T010 must be completed before T009 (if database schema changes are required for search service).
- T006-T010 must be completed before T011-T013.

## Parallel Example
```
# Launch T003-T005 together:
Task: "Verify contract test backend/tests/contract/embedding-service.test.js exists and fails for generateEmbedding and initializeModel methods."
Task: "Write integration test for ingesting a new knowledge asset and verifying embedding storage as described in quickstart.md."
Task: "Write integration test for performing a semantic search and getting relevant results as described in quickstart.md."

# After T003-T005 are failing, T006, T007 can be started in parallel:
Task: "Update backend/src/models/knowledge-asset.js to include the `embedding` field (type: `[Number]`, dimension: 384, dtype: `float32`)."
Task: "Implement initializeModel() in backend/src/services/embedding-service.js to load and initialize the embedding model."
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Avoid: vague tasks, same file conflicts
