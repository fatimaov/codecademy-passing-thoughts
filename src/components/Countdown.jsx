import { useEffect, useState } from 'react';

function Countdown({ thought, removeThought }) {
    const [countdown, setCountdown] = useState(Math.ceil((thought.expiresAt - Date.now()) / 1000))
    
    const isWarning = countdown <= 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 1) {
                    return removeThought(thought.id);
                }
                return prevCountdown - 1;
            });
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div style={{ color: isWarning ? "rgb(255,0,0)" : "rgb(0,0,0)" }} className='fst-italic mt-4'>Dissapearing in {countdown} seconds...</div>
    )
}

export default Countdown;