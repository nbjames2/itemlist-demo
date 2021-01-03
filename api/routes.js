const express = require('express');
const router = express.Router();
const items = require('./controllers/itemController');

// item routes
router.get('/list/all', items.getAll);
router.post('/list/new', items.createItem);
router.delete('/list/:itemId', items.remove);
router.post('/list/update/:itemId', items.update);

module.exports = router;
