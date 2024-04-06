const { Comment } = require('../models');

class CommentController {
    static async getAll(req, res, next) {
        try {
            const comments = await Comment.findAll();
            res.status(200).json(comments);
        } catch (error) {
            next(error);
        }
    }
    static async getOne(req, res, next) {
        try {
            const comment = await Comment.findByPk(req.params.id);
            if (comment) {
                res.status(200).json(comment);
            } else {
                res.status(404).json({message: 'Comment not found'});
            }
        } catch (error) {
            next(error)
        }
    }
    static async create(req, res, next) {
        try {
            const newComment = await Comment.create(req.body);
            res.status(201).json(newComment);
        } catch (error) {
            next(error)
        }
    }
    static async update(req, res, next) {
        try {
            const comment = await Comment.findByPk(req.params.id);
            if (!comment) {
                return res.status(404).json({message: 'Comment not found'});
            }
            const updateComment = await comment.update(req.body, { returning: true, plain: true });
            res.status(200).json(updateComment);
        } catch (error) {
            next(error)
        }
    }    
    static async delete(req, res, next) {
        try {
            const comment = await Comment.findByPk(req.params.id);
            if (!comment) {
                return res.status(404).json({message: 'Comment not found'});
            }
            await comment.destroy();
            res.status(200).json({message: 'Comment deleted successfully'});
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CommentController;
