const express = require('express');
const router = express.Router();
const deptoController = require('../controllers/deptoController');

router.get('/', deptoController.getAll);
router.get('/:id', deptoController.getById);

module.exports = router;