const { User } = require('../models');

class UserController {
    static async getAll(req, res, next) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            next(error)
        }
    }
    static async getOne(req, res, next) {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({message: 'User not found'});
            }
        } catch (error) {
            next(error)
        }
    }
    static async create(req, res, next) {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            next(error)
        }
    }
    static async update(req, res, next) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({message: 'User not found'});
            }
            const updatedUser = await user.update(req.body, { returning: true, plain: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            next(error)
        }
    }    
    static async delete(req, res, next) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({message: 'User not found'});
            }
            await user.destroy();
            res.status(200).json({message: 'User deleted successfully'});
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController