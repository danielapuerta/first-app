const http = require('http');
const app = require('./backend/app');
const port = process.env.PORT || 3000;
app.set('port',port);
const server = http.createServer(app);

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};







server.listen(port);
