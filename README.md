![Pixelog Logo](logo.png)

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

## Further Development Roadmap

For detailed future plans and implementation steps, please refer to the [Roadmap](roadmap.md).

## Current Project Status

The core architecture for storing diverse knowledge sources, generating embeddings, and performing semantic search is in place. The backend is set up with:
- An `EmbeddingService` capable of generating 768-dimension embeddings using the Google Generative AI API (with chunking for large inputs).
- A `SearchService` integrated with `hnswlib-node` for efficient vector search.
- A `StorageService` for managing file content on the filesystem.
- A `MetadataService` for storing asset metadata and embeddings in a lightweight SQLite database.
- Comprehensive unit, contract, and performance tests for core services.

The next major focus is to fully integrate the `MetadataService` and `StorageService` into the API endpoints, and then to integrate a real machine learning model for embedding generation.
