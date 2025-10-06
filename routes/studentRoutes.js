const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Define CRUD routes
router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router; 
