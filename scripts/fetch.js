/* eslint-disable no-console */

const { get } = require('https');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const url = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/advanced-options/metadata/icons.json';
const stream = createWriteStream(resolve(__dirname, '..', 'data', 'icons.json'));

console.log('Fetching latest icon meta...');

get(url, res => {
  res.pipe(stream);
});
