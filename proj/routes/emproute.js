const express = require('express');
const router = express.Router();
const {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    getEmployeeByMobile, // Import the new controller function
    updateEmployee,
    deleteEmployee
} = require('../controller2/empctrl')


// Create a new employee
router.post('/', createEmployee);

// Get all employees
router.get('/', getAllEmployees);

// Get a single employee by ID
router.get('/:id', getEmployeeById);

// Get an employee by mobile number
router.get('/mobile/:mobile', getEmployeeByMobile); // New route

// Update an employee
router.put('/:id', updateEmployee);

// Delete an employee
router.delete('/:id', deleteEmployee);

module.exports = router;
