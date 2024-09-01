import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import Header from './header';
import Sidebar from './dashboard';

function Home() {
  

    return (
      <div>
       <Header/>
        
        
        <Row>
         
          <Col xs={12} md={3}>
            <Sidebar />
          </Col>

          
          <Col xs={12} md={9} className="mt-4  ">
            <h1 className='d-flex justify-content-center' >Heading of the Page</h1>
           
          </Col>
        </Row>
      
      
        
       
      </div>
    );
}

export default Home;
