const express = require('express');
const router = express.Router();

const boardgamesController = require('../controllers/boardgames');

router.get('/', boardgamesController.getAll);

router.get('/:id', boardgamesController.getOne);

router.post('/', boardgamesController.addGame);

//router.put('/:id', boardgamesController.updateGame);

//router.delete('/:id', boardgamesController.deleteGame);

module.exports = router;