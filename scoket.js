const scoketFn = (io) => {
  // scoket 
  io.on('connection', (socket) => {
    socket.on('sendMessage', (msg) => {
      socket.broadcast.emit('getMessage', { message: 'ok', youMsg: msg });
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
}

module.exports = scoketFn