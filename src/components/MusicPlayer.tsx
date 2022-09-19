import React from 'react';
import { useState, useEffect } from 'react';
import soundfile from '../assets/Opus.m4a';

interface MusicPlayerProps {
    gameStarted: boolean;
    startGame: React.Dispatch<React.SetStateAction<boolean>>
}

const MusicPlayer = ({ gameStarted, startGame }: MusicPlayerProps) => {

    useEffect(() => {

    }, [])

    const toggleAudio = () => {
        startGame(!gameStarted)
        console.log('startad / pausad!!')
    }

    return (
        <div className="flex p-4 bg-peach w-full z-20">
            <audio controls className="mt-0 m-auto" onPlay={toggleAudio} onPause={toggleAudio}>
                <source src={soundfile} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default MusicPlayer;
