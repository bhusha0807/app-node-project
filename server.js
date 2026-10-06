const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: "Live", message: "DevOps Application works fine!" }));
});
server.listen(3000, () => console.log('Running on port 3000'));
