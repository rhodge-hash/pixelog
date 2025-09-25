# Data Model for Embedding Service Implementation

## Entity: KnowledgeAsset

### Fields:
*   `id`: Unique identifier (existing)
*   `content`: The actual knowledge content (existing)
*   `embedding`:
    *   Type: Array of Numbers
    *   Dimension: 384
    *   Data Type: float32
    *   Required: false
    *   Description: Vector embedding of the knowledge asset content, used for semantic search.

### Relationships:
*   None directly introduced by this feature.

### Validation Rules:
*   `embedding` field should be an array of 384 float32 numbers if present.

### State Transitions:
*   A `KnowledgeAsset` can transition from a state without an `embedding` to a state with an `embedding` after processing by the Embedding Service.
