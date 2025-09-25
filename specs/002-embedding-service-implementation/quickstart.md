# Quickstart Guide: Embedding Service Implementation

This guide outlines the steps to quickly set up and verify the Embedding Service functionality.

## 1. Setup

1.  Ensure all backend dependencies are installed:
    ```bash
    cd backend
    npm install
    ```
2.  Ensure the Embedding Service is properly configured (e.g., environment variables for model API keys or local model paths).

## 2. Verify Embedding Generation

This section describes how to verify that knowledge assets are being processed into embeddings.

### Scenario: Ingest a new knowledge asset and verify embedding storage

1.  **Action**: Ingest a new knowledge asset into the system (e.g., via an API endpoint or CLI command).
    *   Example (hypothetical API call):
        ```bash
        curl -X POST http://localhost:3000/api/assets \
        -H "Content-Type: application/json" \
        -d '{
            "title": "Test Document",
            "content": "This is a test document for embedding generation."
        }'
        ```
2.  **Expected Result**: The system should process the asset, generate an embedding, and store it with the `KnowledgeAsset`.
3.  **Verification**:
    *   Query the `KnowledgeAsset` directly (e.g., via an API endpoint or database query) to inspect its `embedding` field.
    *   The `embedding` field should contain an array of 384 float32 numbers.
    *   Example (hypothetical API call to retrieve asset):
        ```bash
        curl http://localhost:3000/api/assets/<asset_id>
        ```

## 3. Verify Semantic Search (Integration with Search Service)

This section describes how to verify that the generated embeddings are used for semantic search.

### Scenario: Perform a semantic search and get relevant results

1.  **Prerequisite**: Ensure at least one knowledge asset with a generated embedding exists in the system.
2.  **Action**: Perform a semantic search query (e.g., via an API endpoint or CLI command).
    *   Example (hypothetical API call):
        ```bash
        curl -X GET "http://localhost:3000/api/search?query=documents about embedding"
        ```
3.  **Expected Result**: The search service should use the query's embedding to find semantically similar knowledge assets.
4.  **Verification**:
    *   The search results should include the previously ingested knowledge asset (if semantically relevant to the query).
    *   The results should be ordered by semantic similarity.

## 4. Developer Verification (Unit/Contract Tests)

1.  Run the backend unit and contract tests:
    ```bash
    cd backend
    npm test
    ```
2.  **Expected Result**: All tests, including `embedding-service.test.js`, should pass after implementation.

