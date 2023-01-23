const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/boardgames', require('./boardgames'));
router.use('/books', require('./books'));

// add more routes, like customers etc, and add a controller for each one

module.exports = router;