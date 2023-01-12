const Express = require('express')();
const Http = require('http').Server(Express);
const Socketio = require('socket.io')(Http);

var position = {
    x: 200,
    y: 200
};

Socketio.on('connection', socket => {
    socket.emit('postion', position);
});

Http.listen(3000, () => {
    console.log('listen to port 3000');
});