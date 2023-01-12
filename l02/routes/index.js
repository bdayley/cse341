const routes = require('express').Router();
const theController = require('../controllers/contacts');

routes.get('/', theController.returnSomething);

module.exports = routes;