'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', (req, res) => {
  console.log(req.query);

  res.end();
});

app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});