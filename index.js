var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const redisAdapter = require('socket.io-redis');
var port = process.env.PORT;

io.adapter(redisAdapter({ host: 'redis', port: 6379 }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    console.log("I got the message on port ", port, msg);
    socket.broadcast.emit('chat message', `${msg}`);
  });
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});