const url = require('url');

const fetch = require('node-fetch');

function dependedUpon(name, options={}) {
  const dependedUponUrl = url.format({
    protocol: 'https',
    host: 'registry.npmjs.org/-/_view/dependedUpon',
    query: {
      group_level: 2,
      startkey: `["${name}"]`,
      endkey: `["${name}",{}]`,
      skip: options.skip || 0,
      limit: options.limit || 1000
    }
  });
  return fetch(dependedUponUrl)
    .then((res) => res.json())
    .then(({rows}) => {
      return rows.reduce((prev, {key:[mod, name]}) => {
        prev.push(name);
        return prev;
      }, []);
    });
}

module.exports = {
  dependedUpon
};
