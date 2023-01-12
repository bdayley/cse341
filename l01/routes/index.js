const routes = require('express').Router();
const theController = require('../controllers');

routes.get('/', theController.returnPerson);
routes.get('/another', theController.returnAnotherPerson);


module.exports = routes;