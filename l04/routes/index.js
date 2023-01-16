const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

// add more routes, like customers, etc and add a controller for each one

module.exports = router;