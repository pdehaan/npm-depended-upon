const { dependedUpon } = require('./index');

// See https://github.com/npm/npm/issues/13743
dependedUpon('fs')
  .then((modules) => console.log(modules));
