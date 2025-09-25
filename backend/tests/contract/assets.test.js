const request = require('supertest');
const express = require('express');
const assetsRouter = require('../../src/api/assets'); // Assuming the router is here

const app = express();
app.use('/assets', assetsRouter);

describe('POST /assets', () => {
  it('should create a new asset', async () => {
    const response = await request(app)
      .post('/assets')
      .field('name', 'test')
      .attach('file', Buffer.from('test content'), 'test.txt');

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
