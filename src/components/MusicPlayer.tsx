import React from 'react';
import { useEffect, useRef } from 'react';
import soundfile from '../assets/Opus.m4a';

interface MusicPlayerProps {
    gameStarted: boolean;
    gameOver: boolean;
    startGame: React.Dispatch<React.SetStateAction<boolean>>
    endGame: React.Dispatch<React.SetStateAction<boolean>>
}

const MusicPlayer = ({ gameStarted, startGame, gameOver, endGame }: MusicPlayerProps) => {

    const audioPlayer = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (gameStarted) {
            audioPlayer?.current?.play();
        }
    }, [gameStarted])

    setInterval(() => {
        if (audioPlayer?.current?.currentTime && audioPlayer?.current?.currentTime > 224) {
            endGame(true);
        }
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
