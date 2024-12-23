const express = require('express')()
const http = require('http').createServer(express)
const io = require('socket.io')(http, {
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})
const logger = require('./etc/log4').getLogger('socket-server');

const SocketServer = (port) =>{
    io.on('connection', (socket) => {

        socket.on('Ping', () => {
            // logger.info(`[Ping] : ${ip}, ${socket.id}`);
            // console.log("ping!!!!!");
            logger.info("ping!!!!!");
            socket.emit("Ping");
        });
    
        
        socket.on('disconnect', () => {
            try{
                
            }
            catch(error){
    
            }
        })
    });
    
    http.listen(port, function(){
        logger.info(`Socket Server listening on port ${port}`)
        }); 
}


module.exports = SocketServer;

