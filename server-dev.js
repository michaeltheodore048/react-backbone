const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const express = require('express');
const proxy = require('proxy-middleware');
const url = require('url');

const config = require('./webpack.config');

const app = express();
app.use('/css', express.static(`${__dirname}/assets/css`));
app.use('/img', express.static(`${__dirname}/assets/img`));
app.use('/build', proxy(url.parse('http://localhost:8001/build')));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/assets/index.dev.html`);
});

const server = new WebpackDevServer(Webpack(config), {
  contentBase: `${__dirname}/build`,
  hot: true,
  quiet: false,
  noInfo: false,
  inline: true,
  publicPath: '/build/',
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
});

server.listen(8001, 'localhost', err => {
  if (err) {
    console.PluginError(err);
  }
  console.log('Webpack hot reload listen to 8001');
});
app.listen(8000);
console.log('listen to 8000');
