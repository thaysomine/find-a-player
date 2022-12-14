import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext';

import Header from './Header';
import ghost from '../assets/ghost.svg';
import pac from '../assets/loading.gif'

export default function Menu() {
    const navigate = useNavigate();
    const [match, setMatch] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userData } = useContext(UserContext);
    const config = {
        headers: { Authorization: `Bearer ${userData.token}` }
    }

    useEffect(() => {
        const URL = 'http://localhost:5000/profile';
        const promise = axios.get(URL, config);
        promise.then(response => {
            setLoading(false);
            if(response.data === null) return setMatch(null);
            setMatch(response.data);
        }).catch(error => console.log(error));
    }, []);

    console.log(match);

    return (
        <Border>
            <div className="menu-container">
                <Header />
                <Container>
                    <Description onClick={()=> {navigate('/profile')}}>+Add profile</Description>
                    <Results>
                        { loading ? <div className='loading'><img src={pac} alt='loding'/></div> : 
                            (match === null) ? <div>Start now creating a profile! =D</div> :
                                (match.length > 0) ? match.map(match => {
                                    return (
                                        <div className='result' key={match.id}>
                                            <img src={ghost} alt="ghost" />
                                            <div className='result-info'>
                                                <p>user: {match.user.name}</p>
                                                <p>nickname: {match.nickname}</p>
                                            </div>
                                        </div>
                                    )
                            }) 
                                : <div>Oh no! D: No matches found!</div>
                        }   
                    </Results>
                </Container>
            </div>
        </Border>
    )
}

const Border = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        box-sizing: border-box;
        padding: 10px;

        .menu-container {
            width: 100%;
            height: 100%;
            border: 1px solid #ccc;
        }
`;

const Container = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 15px;
`;

const Description = styled.div`
    width: 100%;
    height: 60px;
    margin-top: 10px;
    border: 1px solid gray;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    color: #000000;
    font-weight: 700;
`;

const Results = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 15px;
    border: 1px solid gray;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 10px;

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        font-size: 20px;
        font-weight: 700;
        color: #FFFFFF;
    }

    .result {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 15px;
        border-radius: 3px;
        box-sizing: border-box;
        padding: 5px;
        border: 1px solid gray;
        box-shadow: 0px 0px 10px rgba(100,100,100,0.5);
    }
`;