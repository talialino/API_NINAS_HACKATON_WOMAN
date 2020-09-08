const express = require('express');

const routes = express.Router();

const authController = require('./controllers/authController');
const projectController = require('./controllers/projectControllers');

const authMiddleware = require('./middlewares/auth');

routes.post('/register', authController.store);
routes.post('/authenticate', authController.login);
routes.post('/forgot_password', authController.recuperedpass);
routes.post('/reset_password', authController.newpass);

routes.use(authMiddleware);

routes.get('/projects', projectController.test);


module.exports = routes;
