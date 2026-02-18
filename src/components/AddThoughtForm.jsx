import { generateId, getNewExpirationTime } from '../utils/utils';

export function AddThoughtForm(props) {
  return (
    <form className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
