import React, { useEffect, useState } from 'react';
import { Form, Button, Col,Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './dashboard';
import Header from './header';

const EditEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        dob: '',
        gender: '',
        address: '',
        country: '',
        city: '',
        skills: []
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployee();
    }, );

    const fetchEmployee = async () => {
        try {
            const response = await axios.get(`http://localhost:4001/api/employees/${id}`);
            setEmployee(response.data);
        } catch (error) {
            console.error("Error fetching employee details", error);
        }
    };

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4001/api/employees/${id}`, employee);
            alert('Employee updated successfully'); // Show an alert after successful update
            navigate('/search'); // Redirect to the search page after update
        } catch (error) {
            console.error("Error updating employee", error);
        }
    };

    return (
        <div>
            <Header/>
            <Row>
                <Col xs={12}  md={3} >
                <Sidebar/>
                </Col>
                <Col>
                <h2 className="mt-4">Edit Employee</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="firstname" 
                        value={employee.firstname} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="lastname" 
                        value={employee.lastname} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        value={employee.email} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group controlId="mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="mobile" 
                        value={employee.mobile} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                {/* Add more form fields as needed */}
                <Button variant="success" type="submit" className="mt-4">Update</Button>
            </Form>
                </Col>
            </Row>
        </div>
    );
};

export default EditEmployee;
