import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Sidebar from './dashboard';
import Header from './header';

const EmployeeForm = () => {
    const [employeeData, setEmployeeData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        dob: '',
        gender: 'Male',
        address: '',
        country: '',
        city: '',
        skills: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({
            ...employeeData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setEmployeeData({
                ...employeeData,
                skills: [...employeeData.skills, name]
            });
        } else {
            setEmployeeData({
                ...employeeData,
                skills: employeeData.skills.filter(skill => skill !== name)
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Use the correct API endpoint with port 4001
            const response = await axios.post('http://localhost:4001/api/employees', employeeData);
            console.log('Employee created successfully:', response.data);
            alert('Employee is created'); // Alert popup after successful creation
        } catch (error) {
            console.error('There was an error creating the employee:', error);
            alert('Failed to create employee. Please try again.'); // Alert popup on error
        }
    };

    return (
      <div>
        <Row>
            <Header/>
            <Col  xs={12} md={3} >
            <Sidebar/>
            </Col>
            <Col xs={12} md={9}   >
            <Form onSubmit={handleSubmit} className='mt-4 px-2 ' >
            <Row>
                <Col>
                    <Form.Group controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstname"
                            value={employeeData.firstname}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastname"
                            value={employeeData.lastname}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={employeeData.email}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="mobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                    type="text"
                    name="mobile"
                    value={employeeData.mobile}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    type="date"
                    name="dob"
                    value={employeeData.dob}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="Male"
                    checked={employeeData.gender === 'Male'}
                    onChange={handleChange}
                />
                <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="Female"
                    checked={employeeData.gender === 'Female'}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    as="textarea"
                    name="address"
                    value={employeeData.address}
                    onChange={handleChange}
                />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            as="select"
                            name="country"
                            value={employeeData.country}
                            onChange={handleChange}
                            required
                        >
                            <option value="">--Select Country--</option>
                            <option value="USA">USA</option>
                            <option value="India">India</option>
                            {/* Add more countries as needed */}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            as="select"
                            name="city"
                            value={employeeData.city}
                            onChange={handleChange}
                            required
                        >
                            <option value="">--Select City--</option>
                            <option value="New York">New York</option>
                            <option value="Mumbai">Mumbai</option>
                            {/* Add more cities as needed */}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group>
                <Form.Label>Skills</Form.Label>
                <Form.Check
                    type="checkbox"
                    label="AWS"
                    name="AWS"
                    onChange={handleCheckboxChange}
                />
                <Form.Check
                    type="checkbox"
                    label="DevOps"
                    name="DevOps"
                    onChange={handleCheckboxChange}
                />
                <Form.Check
                    type="checkbox"
                    label="Full Stack Developer"
                    name="Full Stack Developer"
                    onChange={handleCheckboxChange}
                />
                <Form.Check
                    type="checkbox"
                    label="Middleware"
                    name="Middleware"
                    onChange={handleCheckboxChange}
                />
                <Form.Check
                    type="checkbox"
                    label="QA-Automation"
                    name="QA-Automation"
                    onChange={handleCheckboxChange}
                />
                <Form.Check
                    type="checkbox"
                    label="WebServices"
                    name="WebServices"
                    onChange={handleCheckboxChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className='px-3  mt-3  ' >
                Save
            </Button>
        </Form>
            </Col>
        </Row>
         
      </div>
    );
};

export default EmployeeForm;
