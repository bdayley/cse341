const express = require('express');
const router = express.Router();

const boardgamesController = require('../controllers/boardgames');
const validation = require('../middleware/validate');
const authorize = require('../middleware/authorize');

router.get('/', boardgamesController.getAll);

router.get('/:id', boardgamesController.getOne);

router.post('/', authorize.checkLogin, validation.saveGame, boardgamesController.addGame);

router.put('/:id', authorize.checkLogin, validation.saveGame, boardgamesController.updateGame);

router.delete('/:id', authorize.checkLogin, boardgamesController.deleteGame);

module.exports = router;