import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State to store the error message
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear any previous error messages

        try {
            const response = await axios.post('http://localhost:4001/api/user/login', { email, password });
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            navigate('/home');
        } catch (error) {
            // If there's an error, display the error message
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message); // Use the server error message
            } else {
                setErrorMessage('Login failed. Please check your email and password.');
            }
        }
    };

    return (
       <div style={{backgroundColor : '#A9A9A9'}} >
         <Container
            fluid
            className="d-flex justify-content-center align-items-center min-vh-100 bg-blue"
        >
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={12}>
                    <Card className="shadow-lg px-5 py-5 ">
                        <Card.Body className='px-5 py-5' >
                            <Card.Title className="text-center mb-4"><h3>LOGIN</h3></Card.Title>
                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} {/* Display error message */}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        className='px-5'
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        className='px-5'
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-4 px-4 ">
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
       </div>
    );
}

export default Login;
