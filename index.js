const express = require('express');
const nunjucks = require('nunjucks');
const router = require('./src/routes/index.js');
const Seed = require('./src/seeders/index.js');

const app = express();

app.use(router);

app.use(express.static('public'));

app.set('view engine', 'njk');

nunjucks.configure('src/views', {
  express: app,
  autoescape: true,
  noCache: true,
});

Seed.up();

app.listen(3000, () => {
  console.log('Fashion App is running!');
});
