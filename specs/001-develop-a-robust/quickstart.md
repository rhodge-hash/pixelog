# Quickstart

This guide provides instructions for setting up and running the Pixelog application.

## Prerequisites

- Node.js (v18 or later)
- npm

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/pixelog.git
    cd pixelog
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

1.  Start the backend server:
    ```bash
    npm run start:backend
    ```

2.  Start the frontend application:
    ```bash
    npm run start:frontend
    ```

3.  Open your browser and navigate to `http://localhost:3000`.

## Using the CLI

### Ingest a file

```bash
./pixelog ingest --file /path/to/your/file.txt
```

### Search for an asset

```bash
./pixelog search "your search query"
```
