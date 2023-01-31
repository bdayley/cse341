const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');
const validation = require('../middleware/validate');
const authorize = require('../middleware/authorize');

router.get('/', booksController.getAll);

router.get('/:id', booksController.getOne);

router.post('/', authorize.checkLogin, validation.saveBook, booksController.addBook);

router.put('/:id', authorize.checkLogin, validation.saveBook, booksController.updateBook);

router.delete('/:id', authorize.checkLogin, booksController.deleteBook)

module.exports = router;