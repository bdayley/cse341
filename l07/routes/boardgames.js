const express = require('express');
const router = express.Router();

const boardgamesController = require('../controllers/boardgames');
const validation = require('../middleware/validate');

router.get('/', boardgamesController.getAll);

router.get('/:id', boardgamesController.getOne);

router.post('/', validation.saveGame, boardgamesController.addGame);

router.put('/:id', validation.saveGame, boardgamesController.updateGame);

router.delete('/:id', boardgamesController.deleteGame);

module.exports = router;