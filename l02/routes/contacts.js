const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts'); // include something that exists in a different folder?

router.get('/', contactsController.getAll); // allow the router to access that file/function?

router.get('/:id', contactsController.getSingle);

module.exports = router;


// http://expressjs.com/en/guide/routing.html