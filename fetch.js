const https = require('https');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/advanced-options/metadata/icons.json';
const stream = fs.createWriteStream('./icons.json');

https.get(url, res => {
  res.pipe(stream);
});
