import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import Header from './Header';
import ghost from '../assets/ghost.svg';
import pac from '../assets/loading2.gif';

export default function Profile() {
    const {userData} = useContext(UserContext);
    console.log(userData, 'useradata');
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [modes, setModes] = useState([]);
    const [elos, setElos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        gameId: '',
        nickname: '',
        modeId: '',
        eloId: ''
    });
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
    console.log(selectedOption);

    async function handleSubmit(e) {
        e.preventDefault();
        const URL = 'http://localhost:5000/profile';
        const config = {
            headers: { Authorization: `Bearer ${userData.token}` }
        }
        const { gameId, nickname, modeId, eloId } = selectedOption;
        if (gameId === '' || nickname === '' || modeId === '' || eloId === '') {
            alert('Preencha todos os campos!');
        } else {
            try {
                const { data } = await axios.post(URL,  { userId: userData.userId,gameId, nickname, modeId, eloId }, config);
                console.log(data);
                navigate('/menu');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <Border>
            <div className="menu-container">
                <Header />
                <Container>
                    <Results>
                        <h2>Add profile</h2>
                        <form onSubmit={handleSubmit}>
                        <p>Choose game</p>
                        <Select
                            defaultValue={selectedOption}
                            onChange={(value) => setSelectedOption({ ...selectedOption, gameId: value.key })}
                            options={options}
                            autoFocus={true}
                        />
                        <p>Nickname on game</p>
                        <input
                            className='input'
                            type="text" 
                            placeholder="Nickname" 
                            required
                            onChange={(nickname) => setSelectedOption({ ...selectedOption, nickname: nickname.target.value })}
                        />
                        <p>Choose mode</p>
                        <Select
                            defaultValue={selectedOption}
                            onChange={(value) => setSelectedOption({ ...selectedOption, modeId: value.key })}
                            options={modesOptions}
                            autoFocus={true}
                        />
                        <p>Choose elo</p>
                        <Select
                            defaultValue={selectedOption}
                            onChange={(value) => setSelectedOption({ ...selectedOption, eloId: value.key })}
                            options={elosOptions}
                            autoFocus={true}
                        />
                        <div className="buttons">
                            <button onClick={() => navigate('/menu')}>Cancel</button>
                            <button type="submit" onClick={()=> setLoading(true)}>{
                                loading ? <div className='loading'><img src={pac} alt='loding'/></div> : 'Add'
                            }</button>
                        </div>
                        </form>
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

const Results = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 15px;
    border: 1px solid gray;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 10px;

    .loading img {
        height: 35px;
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

    .input {
        width: 98%;
        height: 42px;
        border-radius: 5px;
        font-family: 'Inconsolata', monospace;
        font-size: 20px;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        height: auto;
    }
    button {
        width: 48%;
        height: 42px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #000000;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Inconsolata', monospace;
    }
`;