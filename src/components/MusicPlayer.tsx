import React from 'react';
import { useState, useEffect, useRef } from 'react';
import soundfile from '../assets/Opus.m4a';

interface MusicPlayerProps {
    gameStarted: boolean;
    gameOver: boolean;
    startGame: React.Dispatch<React.SetStateAction<boolean>>
    endGame: React.Dispatch<React.SetStateAction<boolean>>
}

const MusicPlayer = ({ gameStarted, startGame, gameOver, endGame }: MusicPlayerProps) => {

    const audioPlayer = useRef<HTMLAudioElement>(null);
    const [clock, increment] = useState(0);

    useEffect(() => {
        if (gameStarted) {
            audioPlayer?.current?.play();
        }
    }, [gameStarted])

    useEffect(() => {
        if (!gameOver && audioPlayer?.current?.currentTime && audioPlayer?.current?.currentTime > 223) {
            endGame(true)
        }
    }, [clock, endGame, gameOver]);

    setInterval(() => {
        increment(clock + 1)
    }, 1000);

    const play = () => {
        if (!gameStarted) {
            startGame(true);
        }
    }

    const pause = () => {
        startGame(false)
    }

    return (
        <div className="flex bg-peach w-full z-20">
            <audio ref={audioPlayer} controls className="mt-0 m-auto" onPlay={play} onPause={pause}>
                <source src={soundfile} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default MusicPlayer;
