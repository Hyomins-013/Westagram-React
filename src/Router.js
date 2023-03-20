import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const Router = () => {
    return(
        <BrowserRouter>
        <Nav />
            <Router>
                <Route path="/" element={<component />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Main" element={<Main />} />
            </Router>
        <Footer />
        </BrowserRouter>
    );
};

export default Router;