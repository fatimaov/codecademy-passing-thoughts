import { useEffect, useState } from 'react';

function Countdown({timeRemaining}) {
    const [countdown, setCountdown] = useState(timeRemaining/1000)

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1)
        }, 1000)

        return () => clearInterval(interval)
    })
        

    return (
        <div >This thought will dissapear in {countdown} seconds</div>
    )
}

export default Countdown;