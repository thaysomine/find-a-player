import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext';
import logo from '../assets/logo1.gif';

export default function Login() {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    async function handleLogin(e) {
        e.preventDefault();
        const URL = 'http://localhost:5000/login';

        try {
            const {data: {token, userId, name}} = await axios.post(URL, login);
            setUserData({token, userId, name});
            console.log({token, userId, name});
            navigate('/menu');
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
        background-color: #FFFFFF;
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