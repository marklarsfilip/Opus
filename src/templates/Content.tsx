import { useEffect, useState } from 'react';

import MusicPlayer from '../components/MusicPlayer'
import DiceRoll from '../components/DiceRoll'

const Content = () => {
    const [gameStarted, startGame] = useState(false);

    useEffect(() => {
        console.log('i content: ');
        console.log(gameStarted);
    }, [gameStarted]);

    const n = 50; // Or something else

    return (
        <div className="flex flex-col flex-wrap grow p-4 bg-peach birdz">
            <DiceRoll game-started={gameStarted} start-game={startGame} />
            <MusicPlayer gameStarted={gameStarted} startGame={startGame} />
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
        </div>
    );
}

export default Content;
