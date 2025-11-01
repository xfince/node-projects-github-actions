const express = require('express');
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  addComment
} = require('../controllers/taskController');
const { protect, authorize } = require('../middleware/auth');
const { taskValidation, commentValidation, validate } = require('../middleware/validation');

const router = express.Router();

router
  .route('/')
  .get(protect, getTasks)
  .post(protect, taskValidation, validate, createTask);

router
  .route('/:id')
  .get(protect, getTask)
  .put(protect, updateTask)
  .delete(protect, authorize('admin'), deleteTask);

router
  .route('/:id/comments')
  .post(protect, commentValidation, validate, addComment);

module.exports = router;