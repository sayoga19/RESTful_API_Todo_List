const express = require('express');
const router = express.Router();
const UserRouter = require('./user');
const TaskRouter = require('./task');
const CommentRouter = require('./comment');

router.use('/api/user', UserRouter);
router.use('/api/task', TaskRouter);
router.use('/api/comment', CommentRouter);

module.exports = router