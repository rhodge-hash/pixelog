# Pixelog

Pixelog is a robust, open-source application designed to store diverse knowledge sources (text, images, audio, micro-videos) as compressed, encrypted video files (QR code streams). These files are portable, streamable, and semantically searchable.

## Features

- **Diverse Knowledge Storage**: Store text, images, audio, and micro-videos.
- **Compressed & Encrypted**: Efficient and secure storage of your data.
- **Portable & Streamable**: Access your knowledge assets anywhere.
- **Semantic Search**: Easily find what you're looking for with intelligent search.
- **Embedding Service**: Generates vector embeddings for knowledge assets to enable semantic search.
- **Open-Source**: Built with transparency and community in mind.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/rhodge-hash/pixelog.git
    cd pixelog
    ```

2.  Install backend dependencies:
    ```bash
    cd backend
    npm install
    cd ..
    ```

3.  Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    cd ..
    ```

4.  Install CLI dependencies:
    ```bash
    cd cli
    npm install
    cd ..
    ```

## Running the Application

### Start the Backend

```bash
cd backend
node src/index.js
```

### Start the Frontend

```bash
cd frontend
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port indicated by Vite).

## Using the CLI

### Ingest a file

```bash
./cli/pixelog ingest /path/to/your/file.txt
```

### Search for an asset

```bash
./cli/pixelog search "your search query"
```

## Further Implementation Steps

This application is currently a prototype. To achieve a fully working and robust implementation, the following areas require further development:

### 1. Embedding Service Implementation

-   **Current Progress**: The `EmbeddingService` has been refactored to include `initializeModel()` and `generateEmbedding(data)` methods. The `KnowledgeAsset` model now includes an `embedding` field. The `SearchService` has been updated to utilize the `EmbeddingService`. Contract, unit, and performance tests for the `EmbeddingService` are in place. The `generateEmbedding` method currently uses a placeholder that generates random vectors of the correct dimension (384).
-   **Next Steps**: The actual machine learning model for generating embeddings needs to be integrated. This involves making a decision on the specific model and its deployment strategy (local, cloud API, etc.), as outlined in `research.md`.

### 2. Data Storage and Retrieval

-   **Current Status**: Knowledge assets are stored as raw files on the local filesystem. Metadata is implicitly handled.
-   **Action Required**: Implement a more robust data management layer. This could involve:
    *   **Database Integration**: Use a lightweight database (e.g., SQLite) to store metadata about the knowledge assets (IDs, types, original filenames, embedding vectors, paths to encrypted files).
    *   **Encryption/Decryption**: Implement actual encryption and decryption of the content files. The current `StorageService` only saves the raw buffer.
    *   **Data Integrity**: Add mechanisms to ensure data integrity and handle corrupted files.

### 3. Semantic Search Refinement

-   **Current Status**: The `SearchService` uses `hnswlib-node` but is initialized with a fixed dimension and max elements. The search returns raw results.
-   **Action Required**: Enhance the search functionality:
    *   **Dynamic Index Management**: Implement logic to dynamically update the HNSW index as new assets are added or removed.
    *   **Result Ranking**: Improve search result ranking beyond simple nearest neighbors, potentially incorporating metadata or relevance scoring.
    *   **Filtering/Faceting**: Add options to filter search results by type, date, or other metadata.

### 4. User Interface Enhancements

-   **Current Status**: The frontend provides basic file upload and search display.
-   **Action Required**: Improve the user experience:
    *   **Visual Feedback**: Provide progress indicators for uploads and searches.
    *   **Detailed Search Results**: Display more information about each search result (e.g., a preview, metadata).
    *   **Error Handling**: Display user-friendly error messages for failed operations.
    *   **Responsive Design**: Ensure the UI is usable across different devices.

### 5. CLI Tooling Improvements

-   **Current Status**: Basic `ingest` and `search` commands are implemented.
-   **Action Required**: Enhance CLI functionality:
    *   **Configuration Management**: Allow configuration of backend URL, data paths, etc., via CLI arguments or a config file.
    *   **Output Formatting**: Provide more structured and user-friendly output for CLI commands.
    *   **Additional Commands**: Implement commands for listing assets, deleting assets, updating metadata, etc.

### 6. Testing and Quality Assurance

-   **Current Status**: Basic unit and integration tests are in place.
-   **Action Required**: Expand test coverage:
    *   **Comprehensive Unit Tests**: Ensure all modules and functions have thorough unit tests.
    *   **Integration Tests**: Add more end-to-end integration tests covering various user flows and edge cases.
    *   **Performance Testing**: Implement benchmarks to validate performance goals.
    *   **Security Testing**: Conduct security audits and penetration testing.

## Next Steps: CI/CD Workflow

Our next major goal is to set up a robust CI/CD workflow. This will involve creating new specification and planning templates to guide the automation of building, testing, and deploying this application. This will ensure continuous quality and efficient delivery of new features.