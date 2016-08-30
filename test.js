const { dependedUpon } = require('./index');

dependedUpon('fs')
  .then((modules) => console.log(modules));
