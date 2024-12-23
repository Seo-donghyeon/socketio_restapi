const logger = require('./etc/log4').getLogger('socket-client');
const io = require('socket.io-client');

const socket = io("http://" + process.env.SOCKET_HOST + ":" + process.env.SOCKET_PORT + "/", { query:{connectSource:"App", userId:"test002_service", userType:"Server"}} );

socket.emit("ping");


module.exports = socket;
