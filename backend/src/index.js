const express = require('express');
const assetsRouter = require('./api/assets');
const searchRouter = require('./api/search');

const app = express();
const port = 3000;

app.use('/assets', assetsRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
