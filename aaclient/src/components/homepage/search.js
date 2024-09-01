import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, Form, Col,Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from './dashboard';
import Header from './header';

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([]);
    const [searchMobile, setSearchMobile] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:4001/api/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees', error);
        }
    };

    const deleteEmployee = async (id) => {
        try {
            await axios.delete(`http://localhost:4001/api/employees/${id}`);
            alert('Employee deleted successfully');
            setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== id));
        } catch (error) {
            console.error('Error deleting employee', error);
        }
    };

    const searchByMobile = async () => {
        try {
            const response = await axios.get(`http://localhost:4001/api/employees/mobile/${searchMobile}`);
            setEmployees([response.data]); // Show only the searched employee
        } catch (error) {
            console.error('Error searching employee by mobile', error);
            alert('Employee not found with this mobile number');
        }
    };

    return (
      <div>
        <Header/>
        <Row>
            <Col xs={12} md={3}  >
            <Sidebar/>
            </Col>
            <Col>
            <h2 className="mt-4">Employee Management</h2>
            <Form className="mt-4">
                <Form.Group controlId="formSearchMobile">
                    <Form.Label>Search by Mobile Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter mobile number"
                        value={searchMobile}
                        onChange={(e) => setSearchMobile(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={searchByMobile} className="mt-2">
                    Search
                </Button>
            </Form>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee._id}>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>{employee.mobile}</td>
                            <td>
                                <Button 
                                    variant="primary" 
                                    onClick={() => navigate(`/edit-employee/${employee._id}`)}
                                >
                                    Edit
                                </Button>{' '}
                                <Button 
                                    variant="danger" 
                                    onClick={() => deleteEmployee(employee._id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Col>
        </Row>
      </div>
    );
};

export default EmployeeManagement;
