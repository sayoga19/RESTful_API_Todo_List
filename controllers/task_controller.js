const { Task } = require('../models');
const task = require('../models/task');

class TaskController {
    static async getAll(req, res, next) {
        try {
            const tasks = await Task.findAll();
            res.status(200).json(tasks);
        } catch (error) {
            next(error);
        }
    }
    static async getOne(req, res, next) {
        try {
            const task = await Task.findByPk(req.params.id);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({message: 'Task not found'});
            }
        } catch (error) {
            next(error);
        }
    }
    static async create(req, res, next) {
        try {
            const newTask = await Task.create(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const task = await Task.findByPk(req.params.id);
            if (!task) {
                return res.status(404).json({message: 'Task not found'});
            }
            const updatedTask = await task.update(req.body, { returning: true, plain: true });
            res.status(200).json(updatedTask);
        } catch (error) {
            next(error)
        }
    } 
    static async delete(req, res, next) {
        try {
            const task = await Task.findByPk(req.params.id);
            if (!task) {
                return res.status(404).json({message: 'Task not found'});
            }
            await task.destroy();
            res.status(200).json({message: 'Task deleted successfully'});
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TaskController;
