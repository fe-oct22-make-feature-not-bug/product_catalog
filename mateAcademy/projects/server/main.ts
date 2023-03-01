'use strict';

const express = require('express');
const cors = require('cors');

const fs = require('fs');
const path = require('path');

// Directory where your JSON files are stored
const directoryPath = path.join(__dirname, 'public/phones');
const phones = [];

// Read all files in the directory
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.log('Error reading directory: ' + err);
    return;
  }

  let i = 0;

  // Loop through each file
  for (const file of files) {
    if (i >= 1) {
      break
    }

    i++;
    // Check if the file is a JSON file
    if (path.extname(file) === '.json') {
      // Load the JSON data from the file
      try {
        const jsonData = fs.readFileSync(path.join(directoryPath, file), 'utf-8');
        const data = JSON.parse(jsonData);
        Object.assign(data, { createdAt: new Date() });
        phones.push(data);
        console.log(data.description.map(d => JSON.stringify(d)));
      } catch (e) {
        console.error(`Error parsing JSON file ${file}: ${e}`);
      }
    }
  }
});


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