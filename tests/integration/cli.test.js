const { exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

describe('CLI Integration Tests', () => {
  const cliPath = path.resolve(__dirname, '../../cli/pixelog.js');
  const testFilePath = path.resolve(__dirname, './test-file.txt');

  beforeAll(() => {
    fs.writeFileSync(testFilePath, 'This is a test file for CLI ingestion.');
  });

  afterAll(() => {
    fs.removeSync(testFilePath);
  });

  it('should ingest a file', (done) => {
    exec(`${cliPath} ingest ${testFilePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return done(error);
      }
      expect(stdout).toContain('File ingested successfully');
      done();
    });
  });

  it('should search for a query', (done) => {
    exec(`${cliPath} search "test file"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return done(error);
      }
      expect(stdout).toContain('Search results');
      done();
    });
  });
});
