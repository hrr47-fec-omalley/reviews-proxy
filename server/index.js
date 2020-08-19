var express = require('express')
var { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.static(__dirname + '/../public'));

console.log('cpm', createProxyMiddleware)

var port = 3004;

app.use('/:id/pictures/:id', createProxyMiddleware({
  target: 'http://localhost:3000/',
  changeOrigin: true,
}));
app.use('/:id/similar/:id', createProxyMiddleware({
  target: 'http://localhost:3001/',
  changeOrigin: true,
}));
app.use('/reviews', createProxyMiddleware({
  target: 'http://localhost:3002/',
  changeOrigin: true,
}));
app.use('/:id/bag/:id', createProxyMiddleware({
  target: 'http://localhost:3003/',
  changeOrigin: true,
}));

app.get('/', (req, res) => {
  res.send('Mykea homepage');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});