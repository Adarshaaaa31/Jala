const mongoose = require('mongoose');

// Define Employee Schema
const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true
    },
    dob: {
        type: Date, // Date of birth
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], // Ensures only specific values are allowed
        required: true
    },
    address: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    skills: {
        type: [String], // Array to store multiple skills
        required: true
    },
   
}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);
