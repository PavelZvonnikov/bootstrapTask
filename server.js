const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, () => {
  console.log('Application listening on localhost:3000');
});

