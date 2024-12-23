const path = require('path');
const log4js = require('log4js');
log4js.configure(path.join(__dirname, '../log4js.json')); // log4js 설정


module.exports = log4js;
