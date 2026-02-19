import { useState } from "react";
import { generateId, getNewExpirationTime } from '../utils/utils';

function AddThoughtForm({ addThought }) {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        return setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text) {
            return;
        }
        const newThought = {
            id: generateId(),
            text: text,
            expiresAt: getNewExpirationTime(),
        }
        addThought(newThought);
        setText('')
    }

    return (
        <form className="input-group my-5 mx-auto" onSubmit={handleSubmit} style={{maxWidth: "500px"}}>
            <input
                type="text"
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
                value={text}
                onChange={handleChange}
                className="form-control"
            />
            <input type="submit" value="Add" className="btn btn-primary" />
        </form>
    );
}

export default AddThoughtForm;