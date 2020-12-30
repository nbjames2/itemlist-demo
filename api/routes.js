const express = require('express');
const router = express.Router();
const users = require('./controllers/userController');
const items = require('./controllers/itemController');

// user routes
router.post('/user/new', users.createUser);
router.post('/user/login', users.login);
router.get('/user/:userId', users.getUser);

// item routes
router.get('/list/all', items.getAll);
router.post('/list/new', items.createItem);
router.delete('/list/:itemId', items.remove);
router.post('/list/update/:itemId', items.update);

module.exports = router;
