import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './modules/Navbar/Navbar';
import Dashboard from './modules/Dashboard/container/Dashboard';
import SignUp from './modules/SignUp/container/SignUp';
import Contact from './modules/Contact/container/Contact';
import About from "./modules/About/container/About";
const Router = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/signup' element={<SignUp />}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
};
export default Router;