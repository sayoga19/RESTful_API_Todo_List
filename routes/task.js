const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task_controller');

router.get('/', taskController.getAll);
router.get('/:id', taskController.getOne);
router.post('/', taskController.create);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.delete);

module.exports = router