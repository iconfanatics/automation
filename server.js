const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello version 2 from AWS EC2! This is deployed via GitHub Actions.');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
