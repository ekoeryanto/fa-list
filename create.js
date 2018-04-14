const fs = require('fs');
const icons = require('./icons.json');

const list = Object.keys(icons).map(name => {
  const { styles, unicode } = icons[name];

  return { name, styles, unicode };
});

const styles = ['solid', 'brands', 'regular'];

styles.forEach(s => {
  let icons = list.filter(f => f.styles.includes(s));

  icons = icons.map(i => i.name);

  fs.writeFileSync(
    `./src/${s}.json`,
    JSON.stringify(icons)
  );
});
