import { useEffect, useState, useMemo } from "react";

function Countdown({ thought, removeThought }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 250); // smoother, still cheap
    return () => clearInterval(id);
  }, []);

  const countdown = useMemo(() => {
    return Math.max(0, Math.ceil((thought.expiresAt - now) / 1000));
  }, [thought.expiresAt, now]);

  const isWarning = countdown <= 3;

  useEffect(() => {
    if (countdown === 0) removeThought(thought.id);
  }, [countdown, removeThought, thought.id]);

  return (
    <div
      style={{ color: isWarning ? "rgb(255,0,0)" : "rgb(0,0,0)" }}
      className="fst-italic mt-4"
    >
      Dissapearing in {countdown} seconds...
    </div>
  );
}

export default Countdown;
