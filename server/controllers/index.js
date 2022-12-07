const express = require('express');
const router = express.Router();


const apiController = require('./api');
router.use('/api', apiController);

const viewsController = require('./viewsController');
router.use(viewsController);

module.exports = router;