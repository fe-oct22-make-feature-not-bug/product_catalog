'use strict';

const { Phone } = require('../models');

const fs = require('fs');
const path = require('path');

// Directory where your JSON files are stored
const upperDirectoryPath = path.dirname(__dirname);
const directoryPath = path.join(upperDirectoryPath, 'public/phones');
const phones = [];

console.log(upperDirectoryPath);

// Read all files in the directory
// fs.readdir(directoryPath, function (err, files) {
//   if (err) {
//     console.log('Error reading directory: ' + err);
//     return;
//   }

//   let i = 0;

//   console.log(files)
//   // Loop through each file
//   for (const file of files) {
//     if (i >= 1) {
//       break
//     }

//     i++;

//     console.log(file);
//     // Check if the file is a JSON file
//     if (path.extname(file) === '.json') {
//       // Load the JSON data from the file
//       console.log(path.join(directoryPath, file));
//       try {
//         const jsonData = fs.readFileSync(path.join(directoryPath, file), 'utf-8');
//         const data = JSON.parse(jsonData);
//         Object.assign(data, { createdAt: new Date() });
//         phones.push(data);
//         console.log(data);
//       } catch (e) {
//         console.error(`Error parsing JSON file ${file}: ${e}`);
//       }
//     }
//   }
// });

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(Phone.tableName, [
      {
        id: 'apple-iphone-11-128gb-black',
        namespaceId: 'apple-iphone-11',
        name: 'Apple iPhone 11 128GB Black',
        capacityAvailable: [ '64GB', '128GB', '256GB' ],
        capacity: '128GB',
        priceRegular: 1100,
        priceDiscount: 1050,
        colorsAvailable: [ 'black', 'green', 'yellow', 'white', 'purple', 'red' ],
        color: 'black',
        images: [
          'img/phones/apple-iphone-11/black/00.jpg',
          'img/phones/apple-iphone-11/black/01.jpg',
          'img/phones/apple-iphone-11/black/02.jpg',
          'img/phones/apple-iphone-11/black/03.jpg',
          'img/phones/apple-iphone-11/black/04.jpg'
        ],
        description: Sequelize.literal(JSON.stringify([
          { title: 'And then there was Pro', text: [
            "A transformative triple-camera system that adds tons of capability without complexity.",
            "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
          ] },
          { title: 'Camera', text: [
            "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
          ] },
          {
            title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
            text: [
              "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
            ]
          }
        ].map(desc => `${JSON.stringify(desc)}::jsonb`)) + '::jsonb[]'),
        screen: "6.1' IPS",
        resolution: '1792x828',
        processor: 'Apple A13 Bionic',
        ram: '4GB',
        camera: '12 Mp + 12 Mp + 12MP',
        zoom: 'Digital, 5x',
        cell: [ 'GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE' ],
        createdAt: new Date()
      }
     ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete(Phone.tableName, null, {});
  }
};
