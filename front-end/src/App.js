import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from 'react';

import Home from './components/Home';
import Menu from './components/Menu';
import Signup from './components/Signup';
import Login from './components/Login';

export default function App() {
    console.log('App.js');
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/menu" element={<Menu/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}