import { useEffect, useState } from 'react';

function Countdown({ thought, removeThought }) {
    const [countdown, setCountdown] = useState(Math.ceil((thought.expiresAt - Date.now()) / 1000))
    const [redValue, setRedValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 4) {
                    setRedValue(255);
                }
                if (prevCountdown === 1) {
                    return removeThought(thought.id);
                }
                return prevCountdown - 1;
            });
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    })

    return (
        <div style={{ color: `rgb(${redValue}, 0, 0)` }} className='fst-italic mt-4'>Dissapearing in {countdown} seconds...</div>
    )
}

export default Countdown;