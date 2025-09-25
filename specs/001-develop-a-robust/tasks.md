# Tasks for Feature: Develop a robust, open-source application named Pixelog

This document outlines the tasks required to implement the feature.

## Phase 0: Setup

- [x] **T001**: Initialize `backend` and `frontend` projects with `npm init -y`.
- [x] **T002**: Install backend dependencies: `express`, `multer`, `fs-extra`, `hnswlib-node`, `jest`.
- [x] **T003**: Install frontend dependencies: `react`, `react-dom`, `vite`, `vitest`, `@xenova/transformers`.
- [x] **T004**: Configure `jest` for the backend.
- [x] **T005**: Configure `vite` and `vitest` for the frontend.
- [x] **T006**: Set up `eslint` and `prettier` for both projects.

## Phase 1: Backend Development

- [x] **T007** [P]: Create contract test for `POST /assets` endpoint in `backend/tests/contract/assets.test.js`.
- [x] **T008** [P]: Create contract test for `GET /search` endpoint in `backend/tests/contract/search.test.js`.
- [x] **T009** [P]: Create `KnowledgeAsset` model in `backend/src/models/knowledge-asset.js`.
- [x] **T010** [P]: Create `User` model in `backend/src/models/user.js`.
- [x] **T011**: Create `StorageService` in `backend/src/services/storage-service.js` to handle file system operations.
- [x] **T012**: Create `SearchService` in `backend/src/services/search-service.js` to manage the `hnswlib-node` index.
- [x] **T013**: Create `EmbeddingService` in `backend/src/services/embedding-service.js` to generate embeddings.
- [x] **T014**: Implement `POST /assets` endpoint in `backend/src/api/assets.js`.
- [x] **T015**: Implement `GET /search` endpoint in `backend/src/api/search.js`.
- [x] **T016**: Create Express app in `backend/src/index.js` and integrate services and API endpoints.
- [x] **T017** [P]: Write unit tests for `StorageService` in `backend/tests/unit/storage-service.test.js`.
- [x] **T018** [P]: Write unit tests for `SearchService` in `backend/tests/unit/search-service.test.js`.
- [x] **T019** [P]: Write unit tests for `EmbeddingService` in `backend/tests/unit/embedding-service.test.js`.

## Phase 2: Frontend Development

- [x] **T020** [P]: Create a React component for file uploads in `frontend/src/components/FileUpload.jsx`.
- [x] **T021** [P]: Create a React component for displaying search results in `frontend/src/components/SearchResults.jsx`.
- [x] **T022**: Create a service to communicate with the backend API in `frontend/src/services/api.js`.
- [x] **T023**: Implement the main application layout and routing in `frontend/src/App.jsx`.
- [x] **T024** [P]: Write unit tests for the file upload component in `frontend/tests/unit/FileUpload.test.jsx`.
- [x] **T025** [P]: Write unit tests for the search results component in `frontend/tests/unit/SearchResults.test.jsx`.

## Phase 3: CLI Development

- [x] **T026**: Create CLI entry point in `cli/pixelog.js`.
- [x] **T027**: Implement `ingest` command.
- [x] **T028**: Implement `search` command.
- [x] **T029** [P]: Write integration tests for the CLI in `tests/integration/cli.test.js`.

## Phase 4: Integration and Polish

- [x] **T030**: Write integration test for the file upload and search flow in `tests/integration/e2e.test.js`.
- [x] **T031**: Write `README.md` with setup and usage instructions.
- [x] **T032**: Manually test the application according to `quickstart.md`.

## Parallel Execution Examples

### Backend Contract and Model Tests

```bash
npm test backend/tests/contract/assets.test.js backend/tests/contract/search.test.js backend/src/models/knowledge-asset.js backend/src/models/user.js
```

### Frontend Component Tests

```bash
npm test frontend/tests/unit/FileUpload.test.jsx frontend/tests/unit/SearchResults.test.jsx
```
