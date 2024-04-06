const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router