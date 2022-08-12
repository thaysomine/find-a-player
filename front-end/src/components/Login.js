import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext';
import gamepad from '../assets/gamepad.svg';

export default function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    async function handleLogin(e) {
        e.preventDefault();
        const URL = 'http://localhost:5000/login';

        try {
            const response = await axios.post(URL, login);
            console.log(response);
            navigate('/menu');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Div>
        <img src={gamepad} alt="gamepad" />
        <form onSubmit={handleLogin}>
            <input 
                type="text" 
                placeholder="E-mail"
                required
                onChange={(email) => setLogin({...login, email:email.target.value})} 
            />
            <input 
                type="password" 
                placeholder="Senha"
                required
                onChange={(password) => setLogin({...login, password:password.target.value})}  
            />
            <button type="submit">Entrar</button>
        </form>
        <Link to="/signup">
            <p>Primeira vez? Cadastre-se!</p>
        </Link>
        <Link to="/">
            <p>Homepage</p>
        </Link>
    </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-left: 25px;
    padding-right: 25px;

    img {
        width: 80px;
    }

    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;      
        margin-bottom: 24px;
        color: #FFFFFF;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    input {
        width: 100%;
        height: 58px;
        border-radius: 5px;
        margin-bottom: 13px;
        padding: 15px;
        box-sizing: border-box;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
    button {
        width: 100%;
        height: 46px;
        background-color: #FFFFFF;
        border-radius: 5px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;    
        color: #000000;
        border: none;
    }
    p {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px; 
        color: #FFFFFF; 
        margin-top: 36px;
    }
`;