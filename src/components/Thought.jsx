import Countdown from "./Countdown";

function Thought({ thought, removeThought }) {
    const handleRemoveClick = () => {
        removeThought(thought.id);
    };

    return (
        <li className="list-group-item d-flex justify-content-between pb-5 mt-3 border-0 border-bottom rounded-2">
            <div className="d-flex flex-column">
                <div>
                    <div className="badge text-bg-primary rounded-pill mb-3">{thought.id}</div>
                </div>
                <div className="h3">{thought.text}</div>
                <Countdown thought={thought} removeThought={removeThought} />
            </div>
            <button
                aria-label="Remove thought"
                className="btn btn-close pt-4"
                onClick={handleRemoveClick}
            >

            </button>
        </li>
    );
}

export default Thought;