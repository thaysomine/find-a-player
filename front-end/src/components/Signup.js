import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext';
import gamepad from '../assets/gamepad.svg';
import logo from '../assets/logo1.gif';

export default function Signup() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    async function handleSignup(e) {
        e.preventDefault();
        const URL = 'http://localhost:5000/signup';

        try {
            const response = await axios.post(URL, signup);
            console.log(response);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Div>
            <div className="container">
                <div className="logo">
                <img src={logo} alt="logo" />
                <h1>Find a Player</h1>
            </div>
            <form onSubmit={handleSignup}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    required
                    onChange={(name) => setSignup({...signup, name:name.target.value})}
                />
                <input 
                    type="text" 
                    placeholder="E-mail"
                    required
                    onChange={(email) => setSignup({...signup, email:email.target.value})} 
                />
                <input 
                    type="password" 
                    placeholder="Senha"
                    required
                    onChange={(password) => setSignup({...signup, password:password.target.value})}  
                />
                <input 
                    type="password"
                    placeholder="Confirme a senha"
                    required
                    onChange={(confirmPassword) => setSignup({...signup, confirmPassword:confirmPassword.target.value})} 
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/login">
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
            <Link to="/">
                <p>Homepage</p>
            </Link>
            </div>
    </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 10px;
    color: rgb(145, 145, 145);

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
    }
    .logo {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: start;
        align-items: center;
        box-sizing: border-box;
        padding-left: 15px;
        padding-right: 15px;
    }
    .logo img {
        width: 80px;
    }

    h1 {
        font-family: 'Orbitron', sans-serif;
        font-size: 25px;    
        color: #FFFFFF;
        margin-left: 10px;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding-left: 25px;
        padding-right: 25px;
    }
    input {
        width: 100%;
        height: 57px;
        border-radius: 5px;
        margin-bottom: 18px;
        padding: 15px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        box-shadow: 0px 0px 10px #ccc;
        font-family: 'Inconsolata', monospace;
        font-size: 20px;
        background-color: #000000;
        color: #FFFFFF;
    }
    button {
        width: 100%;
        height: 46px;
        color: rgb(145, 145, 145);
        border-radius: 5px;
        font-family: 'Inconsolata', monospace;
        font-weight: 700;
        font-size: 20px;  
        color: #000000;
        border: none;
    }
    p {
        font-weight: 700;
        font-size: 15px;
        font-family: 'Inconsolata', monospace;
        color: #FFFFFF; 
        margin-top: 28px;
    }
`;