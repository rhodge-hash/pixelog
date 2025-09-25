# Pixelog

Pixelog is a robust, open-source application designed to store diverse knowledge sources (text, images, audio, micro-videos) as compressed, encrypted video files (QR code streams). These files are portable, streamable, and semantically searchable.

## Features

- **Diverse Knowledge Storage**: Store text, images, audio, and micro-videos.
- **Compressed & Encrypted**: Efficient and secure storage of your data.
- **Portable & Streamable**: Access your knowledge assets anywhere.
- **Semantic Search**: Easily find what you're looking for with intelligent search.
- **Open-Source**: Built with transparency and community in mind.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/pixelog.git
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
