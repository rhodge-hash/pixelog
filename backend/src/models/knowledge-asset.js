class KnowledgeAsset {
  constructor(id, type, content, metadata, embedding = null) {
    this.id = id;
    this.type = type;
    this.content = content;
    this.metadata = metadata;
    this.embedding = embedding; // Add embedding field
  }
}

module.exports = KnowledgeAsset;
