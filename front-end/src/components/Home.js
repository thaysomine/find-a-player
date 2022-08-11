import styled from 'styled-components';
//import axios from 'axios';
//import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
//import UserContext from '../context/UserContext';

import gamepad from '../assets/gamepad.svg';

export default function Home() {
    return (
        <StyledHome>
            <img src={gamepad} alt="gamepad" />
            <h1>Find a Player</h1>
            <p>Find a player to play your favorites games with!</p>
            <Login>
                <Link to="/login">Login</Link>
            </Login>
            <Signup>
                <Link to="/signup">Signup</Link>
            </Signup>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 80px;

    }
`;

const Login = styled.div`
    width: 200px;
    height: 50px;
`;

const Signup = styled.div`
    width: 200px;
    height: 50px;
`;