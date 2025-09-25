const fs = require('fs-extra');
const path = require('path');
const StorageService = require('../../src/services/storage-service');

describe('StorageService', () => {
  const basePath = './test-data';
  let storageService;

  beforeEach(() => {
    storageService = new StorageService(basePath);
  });

  afterEach(() => {
    fs.removeSync(basePath);
  });

  it('should save and load a file', async () => {
    const id = 'test-id';
    const content = 'test content';

    const filePath = await storageService.save(id, content);
    expect(filePath).toBe(path.join(basePath, id));

    const loadedContent = await storageService.load(id);
    expect(loadedContent.toString()).toBe(content);
  });
});
