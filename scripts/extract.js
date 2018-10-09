/* eslint-disable no-console */

const { writeFile } = require('fs');
const { resolve } = require('path');

const icons = require(resolve(__dirname, '..', 'data', 'icons.json'));

const list = Object.keys(icons).map(name => {
  const { styles, unicode } = icons[name];

  return { name, styles, unicode };
});

const styles = ['solid', 'brands', 'regular'];
const dataDir = resolve(__dirname, '..', 'data');

styles.forEach(s => {
  const icons = list
    .filter(f => f.styles.includes(s))
    .map(i => i.name);

  const filename = resolve(dataDir, `${s}.json`);

  writeFile(
    filename,
    JSON.stringify(icons),
    err => {
      if (err) {
        console.error(err.message);
        process.exit(1);
      }
      console.log(`extracted ${s} icon to ${filename}`);
    }
  );
});
