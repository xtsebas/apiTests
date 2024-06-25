const express = require('express');
const router = express.Router();
const paisController = require('../controllers/paisController');

router.get('/', paisController.getAll);
router.get('/:id', paisController.getById);

module.exports = router;