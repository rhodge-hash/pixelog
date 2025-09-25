# Data Model

This document describes the data model for the Pixelog application.

## Entities

### KnowledgeAsset

Represents a single piece of information stored in Pixelog.

**Fields**:

- `id` (string, UUID): A unique identifier for the asset.
- `type` (string): The type of the asset (e.g., `text`, `image`, `audio`, `video`).
- `content` (binary): The raw content of the asset.
- `encrypted_content_path` (string): The path to the encrypted file containing the asset's content.
- `metadata` (object): A JSON object containing metadata about the asset (e.g., creation date, content hash, etc.).
- `embedding` (array of floats): The vector embedding of the asset's content, used for semantic search.

**Validation Rules**:

- `id` is required and must be a valid UUID.
- `type` is required and must be one of the supported types.
- `content` is required.
- `encrypted_content_path` is required.

### User

Represents a user of the Pixelog system.

**Fields**:

- `id` (string, UUID): A unique identifier for the user.
- `key_path` (string): The path to the user's local authentication key.

**Validation Rules**:

- `id` is required and must be a valid UUID.
- `key_path` is required.
