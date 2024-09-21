// src/ScoreKeeper.js
import React, { useState, useEffect } from 'react';
import './scorekeeper.css';

const ScoreKeeper = () => {
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [winningScore, setWinningScore] = useState(3);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        if (p1Score === winningScore) {
            setIsGameOver(true);
        } else if (p2Score === winningScore) {
            setIsGameOver(true);
        }
    }, [p1Score, p2Score, winningScore]);

    const handlePlayerOneScore = () => {
        if (!isGameOver) {
            setP1Score(prevScore => prevScore + 1);
        }
    };

    const handlePlayerTwoScore = () => {
        if (!isGameOver) {
            setP2Score(prevScore => prevScore + 1);
        }
    };

    const handleReset = () => {
        setP1Score(0);
        setP2Score(0);
        setIsGameOver(false);
    };

    const handleWinningScoreChange = (e) => {
        setWinningScore(parseInt(e.target.value));
        handleReset(); // Reset scores when winning score changes
    };

    return (
        <div className="container">
            <h1 className="title">{p1Score} to {p2Score}</h1>
            <p>Use the buttons below to keep score</p>
            <div className='count'>
                <label htmlFor="playto" className="label">Playing To</label>
            <div className="select is-rounded">
                <select id="playto" value={winningScore} onChange={handleWinningScoreChange}>
                    {[...Array(9)].map((_, index) => {
                        const value = index + 3;
                        return <option key={value} value={value}>{value}</option>;
                    })}
                </select>
            </div>
            </div>
            <div className='btn-container'>
            <button 
                className="is-primary button" 
                onClick={handlePlayerOneScore} 
                disabled={isGameOver}
            >
                +1 Player One
            </button>
            <button 
                className="is-info button" 
                onClick={handlePlayerTwoScore} 
                disabled={isGameOver}
            >
                +1 Player Two
            </button>
            <button 
                className="is-danger button" 
                onClick={handleReset}
            >
                Reset
                </button>
                 </div>
            {isGameOver && <div className="notification">Game Over!</div>}
            </div>
           
    );
};

export default ScoreKeeper;
