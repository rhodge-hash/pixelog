const request = require('supertest');
const express = require('express');
const path = require('path');
const fs = require('fs-extra');

const app = express();
const assetsRouter = require('../../backend/src/api/assets');
const searchRouter = require('../../backend/src/api/search');

app.use('/assets', assetsRouter);
app.use('/search', searchRouter);

describe('End-to-End Integration Tests', () => {
  const testFilePath = path.resolve(__dirname, './e2e-test-file.txt');

  beforeAll(() => {
    fs.writeFileSync(testFilePath, 'This is an end-to-end test file.');
  });

  afterAll(() => {
    fs.removeSync(testFilePath);
  });

  it('should upload a file and then find it via search', async () => {
    // Upload the file
    const uploadResponse = await request(app)
      .post('/assets')
      .field('name', 'e2e-test')
      .attach('file', fs.readFileSync(testFilePath), 'e2e-test-file.txt');

    expect(uploadResponse.status).toBe(201);
    expect(uploadResponse.body).toHaveProperty('id');

    // Search for the file
    const searchResponse = await request(app).get('/search?q=end-to-end');

    expect(searchResponse.status).toBe(200);
    expect(Array.isArray(searchResponse.body)).toBe(true);
    expect(searchResponse.body.length).toBeGreaterThan(0);
    // Further assertions to check if the uploaded file is in the search results
  });
});
