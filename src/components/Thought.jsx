import Countdown from "./Countdown";

function Thought({ thought, removeThought }) {
    const handleRemoveClick = () => {
        removeThought(thought.id);
    };

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
            <Countdown className="text" thought={thought} removeThought={removeThought} />
        </li>
    );
}

export default Thought;