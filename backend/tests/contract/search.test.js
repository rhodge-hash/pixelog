const request = require('supertest');
const express = require('express');
const searchRouter = require('../../src/api/search'); // Assuming the router is here

const app = express();
app.use('/search', searchRouter);

describe('GET /search', () => {
  it('should return search results', async () => {
    const response = await request(app).get('/search?q=test');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
