import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4001/api/user/register', { email, password });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100"     
          style={{ backgroundColor: '#f8f9fa' }}  >
            <Row className="justify-content-center  ">
                <Col xs={12} md={6} lg={12}>
                    <Card  className="shadow-lg px-5 py-5  " >
                        <Card.Body  className=' px-5 py-5' >
                            <Card.Title className="text-center">Register</Card.Title>
                            <Form onSubmit={handleSubmit}   >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label  >Email address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        className=' px-5'
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        className=' px-5'
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mr-2 mt-4 ">
                                    Register
                                </Button>
                                <Button variant="secondary" onClick={handleLoginClick}  className='mt-4 ms-4 '  >
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;
