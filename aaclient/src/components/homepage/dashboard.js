import React from 'react';
import { Container, Row, Col, Nav, NavDropdown } from 'react-bootstrap';
import './side.css';

function Sidebar() {
  

    return (
        <div>
         

            <Container fluid className="home-container">
                <Row>
                    <Col xs={12}  className="sidebar bg-dark text-white">
                        <div className="sidebar-header text-center py-4">
                            <h3>Get User</h3>
                        </div>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home" className="text-white">
                                <i className="bi bi-house-door-fill"></i> Home
                            </Nav.Link>
                            <NavDropdown title={<span className="text-white"><i className="bi bi-people-fill"></i> Employee</span>} id="employee-dropdown" className="text-white">
                                <NavDropdown.Item href="/create">Create</NavDropdown.Item>
                                <NavDropdown.Item href="/search">Search</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<span className="text-white"><i className="bi bi-folder-fill"></i> More</span>} id="more-dropdown" className="text-white">
                                <NavDropdown.Item href="/more/option1">Option 1</NavDropdown.Item>
                                <NavDropdown.Item href="/more/option2">Option 2</NavDropdown.Item>
                                <NavDropdown.Item href="/more/option3">Option 3</NavDropdown.Item>
                                <NavDropdown.Item href="/more/option4">Option 4</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/settings" className="text-white">
                                <i className="bi bi-gear-fill"></i> Settings
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sidebar;
