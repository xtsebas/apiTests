const express = require('express');
const router = express.Router();
const paisController = require('../controllers/paisController');

router.get('/', paisController.getAll);
router.get('/:id', paisController.getById);
router.post('/', paisController.create);
router.put('/:id', paisController.update);
router.delete('/:id', paisController.delete);

module.exports = router;