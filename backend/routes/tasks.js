const express = require('express')
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask
} = require('../controllers/taskController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all Task routes
router.use(requireAuth)

// GET all Tasks
router.get('/', getTasks)

//GET a single Task
router.get('/:id', getTask)

// POST a new Task
router.post('/', createTask)

// DELETE a Task
router.delete('/:id', deleteTask)

// UPDATE a Task
router.patch('/:id', updateTask)


module.exports = router