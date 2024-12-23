const express = require('express');
const router = express.Router();

const testController = require('../controller/test.controller');

router.get('/', testController.testGetMethed);
router.get('/second', testController.testSecondGetMethed);
router.post('/', testController.testGetMethed);
router.put('/', testController.testGetMethed);
router.delete('/', testController.testGetMethed);

module.exports = router;