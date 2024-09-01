const Employee = require('..//modles/employee')
const asyncHandler = require('express-async-handler')


// Create a new Employee
const createEmployee = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, mobile, dob, gender, address, country, city, skills } = req.body;
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
        res.status(400);
        throw new Error('Employee already exists with this email');
    }

    const employee = await Employee.create({
        firstname,
        lastname,
        email,
        mobile,
        dob,
        gender,
        address,
        country,
        city,
        skills
    });

    res.status(201).json(employee);
});

// Get all Employees
const getAllEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

// Get a single Employee by ID
const getEmployeeById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
        res.status(404);
        throw new Error('Employee not found');
    }

    res.json(employee);
});

// Get an Employee by Mobile Number
const getEmployeeByMobile = asyncHandler(async (req, res) => {
    const { mobile } = req.params;
    
    try {
        const employee = await Employee.findOne({ mobile });
        
        if (!employee) {
            res.status(404);
            throw new Error('Employee not found with this mobile number');
        }
        
        res.json(employee);
    } catch (error) {
        console.error('Error finding employee by mobile number:', error.message);
        res.status(500).json({ message: 'Server Error: Unable to find employee' });
    }
});

// Update an Employee
const updateEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
        res.status(404);
        throw new Error('Employee not found');
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedEmployee);
});

// Delete an Employee
const deleteEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    try {
        const employee = await Employee.findById(id);

        if (!employee) {
            res.status(404);
            throw new Error('Employee not found');
        }

        await Employee.findByIdAndDelete(id);
        res.json({ message: 'Employee removed successfully' });
    } catch (error) {
        console.error('Error deleting employee:', error.message);
        res.status(500).json({ message: 'Server Error: Unable to delete employee' });
    }
});

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    getEmployeeByMobile, // Export the new function
    updateEmployee,
    deleteEmployee
};
