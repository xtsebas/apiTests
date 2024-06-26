const express = require('express');
const router = express.Router();
const deptoController = require('../controllers/deptoController');
const { route } = require('./deptoView');

router.get('/', deptoController.getAll);
router.get('/:id', deptoController.getById);
router.post('/', deptoController.create);
router.put('/:id', deptoController.update);
router.delete('/:id', deptoController.delete);

module.exports = router;