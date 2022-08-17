import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext';

import ghost from '../assets/ghost.svg';
import out from '../assets/out.svg'; 
import background from '../assets/background.jpg';
import logo from '../assets/logo1.gif';

export default function Header(){
    const navigate = useNavigate();
    const {userData} = useContext(UserContext);
    return (
                <HeaderContainer>
                    <div className='icons'>
                        <img src={logo} alt="logo" />
                        <img src={out} alt="sair" onClick={()=> {navigate('/')}}/>
                    </div>
                    <div className='profile'>
                        <img src={ghost} alt="profile" />
                        <p>{userData.name}</p>
                    </div>
                </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;;
    background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1)), url(${background});
    box-sizing: border-box;
    padding: 10px;

    .icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .icons img {
        width: 40px;
        height: 40px;
    }
    .profile {
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .profile img {
        width: 80px;
        height: 80px;
    }
    .profile p {
        font-size: 25px;
        font-family: 'Inconsolata', monospace;
        font-weight: 700;
        color: #FFFFFF;
    }
`;