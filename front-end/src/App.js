import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from "./context/UserContext";

import Home from './components/Home';
import Menu from './components/Menu';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

export default function App() {
    const [userData, setUserData] = useState({token: null, userId: null, name: null});    
    return (
        <UserContext.Provider value={{userData, setUserData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/menu" element={<Menu/>} />
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}