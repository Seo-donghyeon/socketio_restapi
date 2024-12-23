const logger = require('../etc/log4').getLogger('test');
const socketClient = require('../socket-client');

//#region testGetMethod
exports.testGetMethed = async (req, res) => {
    try{
        logger.info("testGetMethed");
        const result = {
            Code : 0, 
            Data : `Success`
        }
        res.status(200).json(result);
    }
    catch{
        res.status(400).json({ Code : -1, Data : error.message })
    }
}
//#endregion

//#region testSecondeGetMethod
exports.testSecondGetMethed = async (req, res) => {
    try{
        logger.info("testSecondGetMethed");
        socketClient.emit("Ping");

        const result = {
            Code : 0, 
            Data : `Success`
        }
        res.status(200).json(result);
    }
    catch{
        res.status(400).json({ Code : -1, Data : error.message })
    }
}
//#endregion

//#region testPostMethod
exports.testPostMethed = async (req, res) => {
    try{
        logger.info("testPostMethed");
        const result = {
            Code : 0, 
            Data : `Success`
        }
        res.status(200).json(result);
    }
    catch{
        res.status(400).json({ Code : -1, Data : error.message })
    }
}
//#endregion

//#region testPutMethod
exports.testPutMethed = async (req, res) => {
    try{
        logger.info("testPutMethed");
        const result = {
            Code : 0, 
            Data : `Success`
        }
        res.status(200).json(result);
    }
    catch{
        res.status(400).json({ Code : -1, Data : error.message })
    }
}
//#endregion

//#region testDeleteMethod
exports.testDeleteMethed = async (req, res) => {
    try{
        logger.info("testDeleteMethed");
        const result = {
            Code : 0, 
            Data : `Success`
        }
        res.status(200).json(result);
    }
    catch{
        res.status(400).json({ Code : -1, Data : error.message })
    }
}
//#endregion