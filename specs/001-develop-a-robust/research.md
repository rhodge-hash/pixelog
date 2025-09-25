# Research & Decisions

This document outlines the technical decisions made based on the feature specification and initial research.

## Primary Dependencies

- **Decision**: 
  - **Backend**: `fs-extra` for file system operations, `multer` for handling file uploads, and `hnswlib-node` for semantic search.
  - **Frontend/Wasm**: `Xenova/transformers` for in-browser embeddings.
- **Rationale**: These libraries are well-maintained, popular, and provide the necessary functionality for file handling and semantic search. `hnswlib-node` allows for local, high-performance vector search, and `Xenova/transformers` enables client-side embedding generation.
- **Alternatives considered**: Other vector databases like Milvus or Weaviate were considered but rejected to maintain the local-first, file-based nature of the application.

## Storage

- **Decision**: 
  - Knowledge assets will be stored as individual encrypted files on the local file system.
  - Semantic search vectors will be stored in an `hnswlib-node` index file.
- **Rationale**: This approach aligns with the requirement for portability and local-first operation. It avoids the need for a separate database server.
- **Alternatives considered**: Using a database like PostgreSQL with `pgvector` was considered but rejected to avoid external dependencies and maintain simplicity.

## Testing

- **Decision**: 
  - **Backend**: `jest` for unit and integration tests.
  - **Frontend/Wasm**: `vitest` for testing Wasm modules.
- **Rationale**: `jest` is a widely used and well-supported testing framework for Node.js. `vitest` is a modern, fast testing framework that works well with Wasm.
- **Alternatives considered**: `mocha` was considered for the backend, but `jest` provides a more integrated experience.

## Performance Goals

- **Decision**:
  - **Upload**: Process and store a 100MB file in under 30 seconds.
  - **Search**: Return search results in under 500ms for a repository of 1 million assets.
- **Rationale**: These goals provide a concrete target for performance testing and optimization.

## Constraints

- **Decision**:
  - The system should be able to run on a standard developer machine (e.g., 16GB RAM, 4-core CPU).
  - The semantic search should be able to work offline.
- **Rationale**: These constraints ensure that the application is accessible to a wide range of users and can be used in various environments.

## Scale/Scope

- **Decision**:
  - The system should be able to handle up to 1 million knowledge assets.
  - The system will be used by a single user at a time.
- **Rationale**: This defines the target scale of the application and simplifies the design by not requiring multi-user support.
