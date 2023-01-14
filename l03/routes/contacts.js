const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts'); // include something that exists in a different folder?

router.get('/', contactsController.getAll); // allow the router to access that file/function?

router.get('/:id', contactsController.getSingle);

// router.post (create new contact)
router.post('/', contactsController.addContact);

// router.put (update)
router.put('/:id', contactsController.updateContact);

// router.delete
router.delete('/:id', contactsController.deleteContact);


module.exports = router;


// http://expressjs.com/en/guide/routing.html