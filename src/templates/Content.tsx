import { useState } from 'react';

import MusicPlayer from '../components/MusicPlayer'
import DiceRoll from '../components/DiceRoll'

const Content = () => {
    const [gameStarted, startGame] = useState(false);
    const [gameOver, endGame] = useState(false);

    return (
        <div className="flex flex-col flex-wrap grow p-4 bg-peach birdz" >
            {gameOver ? (
                <h2 className="flex grow mt-8 mb-6 text-4xl font-emoji">You lost! 😥 ⚰</h2>
            ) : (
                <DiceRoll gameStarted={gameStarted} startGame={startGame} />
            )}
            <MusicPlayer gameStarted={gameStarted} startGame={startGame} gameOver={gameOver} endGame={endGame} />
            <div className="bird-container bird-container--one">
                <div className="bird bird--one"></div>
            </div>

            <div className="bird-container bird-container--two">
                <div className="bird bird--two"></div>
            </div>

            <div className="bird-container bird-container--three">
                <div className="bird bird--three"></div>
            </div>

            <div className="bird-container bird-container--four">
                <div className="bird bird--four"></div>
            </div>
        </div >)
}

export default Content;
