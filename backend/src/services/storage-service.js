const fs = require('fs-extra');
const path = require('path');

class StorageService {
  constructor(basePath) {
    this.basePath = basePath;
    fs.ensureDirSync(basePath);
  }

  async save(id, content) {
    const filePath = path.join(this.basePath, id);
    await fs.writeFile(filePath, content);
    return filePath;
  }

  async load(id) {
    const filePath = path.join(this.basePath, id);
    return fs.readFile(filePath);
  }
}

module.exports = StorageService;
