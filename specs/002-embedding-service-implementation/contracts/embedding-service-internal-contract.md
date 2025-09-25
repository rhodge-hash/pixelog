# Internal Contract: Embedding Service

## Service: Embedding Service (`backend/src/services/embedding-service.js`)

### Method: `generateEmbedding`

*   **Description**: Generates a vector embedding for a given knowledge asset's data.
*   **Input**:
    *   `data`: `string | Buffer` - The content of the knowledge asset.
*   **Output**:
    *   `Promise<number[]>` - A promise that resolves to an array of numbers representing the vector embedding (float32, dimension 384).
*   **Error Handling**:
    *   Should handle cases where the input data is invalid or the underlying embedding model fails.
    *   Will implement retries and rate-limiting for external model interactions.
    *   Will log errors and notify relevant systems on persistent failures.

### Method: `initializeModel`

*   **Description**: Loads and initializes the underlying embedding model.
*   **Input**: None
*   **Output**:
    *   `Promise<void>` - A promise that resolves when the model is successfully initialized.
*   **Error Handling**:
    *   Should handle cases where the model fails to load or initialize.
