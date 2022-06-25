
const http = require('http');

const server = http.createServer((app)=>{
  res.end('Hello Daniela');
});

server.listen(process.env.PORT || 3000);
const app = require('./backend/app');
