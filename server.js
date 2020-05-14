const http = require('http');
let users = [{ id: 1, name: 'mk1' }, { id: 2222, name: 'mk2' }, { id: 3333, name: 'mk3' }];
let server = http.createServer(function (req, res) {
  // console.log(req.method, req.url);
  if (req.url == '/api/users') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(users));
  } else {
    res.end('Not Fount!');
  }
})
server.listen(3000, () => {
  console.log('启动在3000端口');
})