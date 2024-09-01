import React from 'react';
import {  Button,Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/login');
  };

    return (
      <div>
           <Nav style={{ height: '70px', backgroundColor: '#343a40' }} className="bg-primary justify-content-between align-items-center px-3">
                <h5 className="text-white ms-4">MAGNUS</h5>
                <div>
                    <Button variant="primary" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </Nav>
       
        
       
      </div>
    );
}

export default Header;
