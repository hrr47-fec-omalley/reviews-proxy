var express = require('express')
var { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors');
var app = express();
app.use(cors());
app.use('/:id', express.static(__dirname + '/../public'));

var port = 3004;

app.use('/:id/pictures/:id', createProxyMiddleware({
  target: 'http://18.190.28.33:3000/',
  changeOrigin: true,
}));
app.use('/:id/similar/:id', createProxyMiddleware({
  target: 'http://52.207.78.191/',
  changeOrigin: true,
}));
app.use('/:id/reviews/:id', createProxyMiddleware({
  target: 'http://18.223.24.49:3002/',
  changeOrigin: true,
}));

app.get('/', (req, res) => {
  console.log('requrl', req.originalUrl);
  res.send('Mykea homepage');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});