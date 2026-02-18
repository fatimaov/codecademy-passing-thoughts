
import { useEffect } from "react";
import Countdown from "./Countdown";

export function Thought(props) {
    const { thought, removeThought } = props;

    const timeRemaining = Math.ceil((thought.expiresAt - Date.now())/1000)*1000;

    const handleRemoveClick = () => {
        removeThought(thought.id);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeThought(thought.id);
        }, timeRemaining)

        return () => clearTimeout(timeout);
    })

    return (
        <li className="Thought">
            <button
                aria-label="Remove thought"
                className="remove-button"
                onClick={handleRemoveClick}
            >
                &times;
            </button>
            <div>{thought.id}</div>
            <div className="text">{thought.text}</div>
            <Countdown className="text" timeRemaining={timeRemaining} />
        </li>
    );
}
