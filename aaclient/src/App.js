import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register/register';
import Login from './components/login/login';
import Home from './components/homepage/homepage';
import EmployeeForm from './components/homepage/create';
import EmployeeManagement from './components/homepage/search';
import EditEmployee from './components/homepage/editemp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/create" element={<EmployeeForm />} />
                <Route path="/search" element={<EmployeeManagement />} />
                <Route path="/edit-employee/:id" element={<EditEmployee />} />
                <Route path="/" element={<Register/>} />
            </Routes>
        </Router>
    );
}

export default App;