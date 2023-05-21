// routes/todos.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const { Op } = require('sequelize');

router.get('/expired', async (req, res) => {
  try {
    const expiredTodos = await Todo.findAll({
      where: {
        completed: false,
        deadline: {
          [Op.lte]: new Date().toISOString(),
        },
      },
    });
    res.json(expiredTodos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch expired TODOs' });
  }
});
// Create a TODO
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create TODO' });
  }
});

// Read all TODOs
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch TODOs' });
  }
});

// Read one TODO
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'TODO not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch TODO' });
  }
});

// Update a TODO
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'TODO not found' });
    }
    await todo.update(req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update TODO' });
  }
});

// Delete a TODO
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'TODO not found' });
    }
    await todo.destroy();
    res.json({ message: 'TODO deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete TODO' });
  }
});

module.exports = router;
