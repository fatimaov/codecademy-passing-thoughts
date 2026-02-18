import { useState } from "react";
import { generateId, getNewExpirationTime } from '../utils/utils';

export function AddThoughtForm({ addThought }) {
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
        <form className="AddThoughtForm" onSubmit={handleSubmit}>
            <input
                type="text"
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
                value={text}
                onChange={handleChange}
            />
            <input type="submit" value="Add" />
        </form>
    );
}
