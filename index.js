const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.ini'});         // env 파일 적용
const API_PORT = process.env.API_PORT || '9998';    // env의 PORT 우선 사용, 아니면 9998 사용
const SOCKET_PORT = process.env.SOCKET_SERVER_PORT || '8889';    // env의 PORT 우선 사용, 아니면 8889 사용

const socketServer = require('./socket-server');    //
const socketClient = require('./socket-client');    // socket-client 호출, 사용

const logger = require('./etc/log4').getLogger('index');    // log4net

// controller
const testRouter = require('./router/test');

// router
app.use('/test', testRouter);


socketServer(SOCKET_PORT);      // socket server 실행

app.listen(API_PORT, () => {    // rest api 실행
	logger.info(`API Server Listening for requests on port ${API_PORT}`);
});