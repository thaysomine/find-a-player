import styled from 'styled-components';
//import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
//import UserContext from '../context/UserContext';

import gamepad from '../assets/gamepad.svg';
import logo from '../assets/logo.gif';

export default function Home() {
    return (
        <StyledHome>
            <div className="home-container">
                <img src={logo} alt="gamepad" />
                <h1>Find a Player</h1>
                <p>Find a player to play your favorites games together!</p>
                <Login>
                    <Link to="/login">Login</Link>
                </Login>
                <Signup>
                    <Link to="/signup">Signup</Link>
                </Signup>
            </div> 
        </StyledHome>
    )
}

const StyledHome = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
    background-color: #000000;
    font-family: 'Inconsolata', monospace;

    .home-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        box-sizing: border-box;
        padding: 10px;
    }
    img {
        width: 300px;
        height: 300px;
    }
    h1 {
        font-family: 'Orbitron', sans-serif;
        font-size: 40px;
    }
    p {
        text-align: center;
    }
`;

const Login = styled.div`
    width: 200px;
    height: 55px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;    
    justify-content: center;
    box-shadow: 0px 0px 10px #ccc;
    border-radius: 5px;
    margin-top: 50px;
    font-size: 20px;
    a:-webkit-any-link {
        color: #ccc;
        cursor: pointer;
        text-decoration: none;
}
`;

const Signup = styled.div`
    width: 200px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    font-size: 20px;
    a:-webkit-any-link {
        color: #ccc;
        cursor: pointer;
        text-decoration: none;
}
`;