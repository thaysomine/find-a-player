import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import Header from './Header';
import ghost from '../assets/ghost.svg';

export default function Menu() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [modes, setModes] = useState([]);
    const [elos, setElos] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = games.map(game => ({ value: game.name, label: game.name, key: game.id }));
    const modesOptions = modes.map(mode => ({ value: mode.name, label: mode.name, key: mode.id }));
    const elosOptions = elos.map(elo => ({ value: elo.name, label: elo.name, key: elo.id }));

    useEffect(() => {
        const GAMES = 'http://localhost:5000/profile/games';
        const promise = axios.get(GAMES);
        promise.then(response => {
            console.log(response.data);
            setGames(response.data);
        }).catch(error => console.log(error));

        const MODES = 'http://localhost:5000/profile/modes';
        const promise2 = axios.get(MODES);
        promise2.then(response => {
            console.log(response.data);
            setModes(response.data);
        }).catch(error => console.log(error));

        const ELOS = 'http://localhost:5000/profile/elos';
        const promise3 = axios.get(ELOS);
        promise3.then(response => {
            console.log(response.data);
            setElos(response.data);
        }).catch(error => console.log(error));

    }, [selectedOption]);

    return (
        <Border>
            <div className="menu-container">
                <Header />
                <Container>
                    <Results>
                        <h2>Add profile</h2>
                        <p>Choose game</p>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                        <p>Choose mode</p>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={modesOptions}
                        />
                        <p>Choose elo</p>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={elosOptions}
                        />
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
        padding: 15px;

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
    padding: 10px;
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