const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
  res.json({
    hostname: os.hostname(),
    version: 'v2'
  });
});

app.listen(3000, () => {
  console.log('running on port 3000');
});