import { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner'

const DiceRoll = () => {

    const faces = 6;
    const maxRollTimes = 3;

    const [intrvl, setIntrvl] = useState();
    const [diceFace, setDiceFace] = useState(1);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [rollTimes, setRollTimes] = useState();

    useEffect(() => {
        if (rollTimes === 0) {
            clearInterval(intrvl);
            setBtnDisabled(false);
        }
    }, [rollTimes, intrvl]);

    const helperSymbol = () => {
        switch (diceFace) {
            case 1:
                return <span className="text-8xl font-emoji">1️⬅</span>;
            case 3:
                return <span className="text-8xl font-emoji">3️➡</span>;;
            case 6:
                return <span className="text-8xl font-emoji">6️✅</span>;;
            default:
                return <span className="text-8xl font-emoji">❌</span>;;
        }
    }

    const rollDice = () => {
        setBtnDisabled(true);
        clearInterval(intrvl);
        let counter: any = Math.floor((Math.random() * maxRollTimes) + 4);
        setRollTimes(counter);
        const interval: any = setInterval(() => {
            setDiceFace(Math.floor(Math.random() * faces) + 1);
            counter--;
            setRollTimes(counter);
        }, 200);
        setIntrvl(interval);
    }

    const dice = (
        <div className={`z-20 dice-container ${btnDisabled ? 'disabled' : ''}`} onClick={!btnDisabled ? rollDice : () => console.log('relax')}>
            <div className={`dice face-${diceFace}`}>
                <div className="face-1">
                    <div className="dot-container">
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="face-3">
                    <div className="dot-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="face-4">
                    <div className="dot-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="face-2">
                    <div className="dot-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="face-5">
                    <div className="dot-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="face-6">
                    <div className="dot-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="main-container mt-10 mb-5">
                <h1 className="text-3xl font-bold">Roll the dice to begin!</h1>
                <div className="main-dice-container">
                    {dice}
                </div>
            </div>
            <div className="flex justify-center grow mt-10 text-center">
                {btnDisabled ? <InfinitySpin color="#EE4E34" /> : helperSymbol()}
            </div>
        </>
    )
}

export default DiceRoll;