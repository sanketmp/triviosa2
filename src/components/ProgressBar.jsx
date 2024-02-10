import { useState, useEffect } from "react";
import "../styles/ProgressBar.css";

const ProgressBar = ({ count }) => {
  const [timer, setTimer] = useState(count - 1);

  useEffect(() => {
    setTimer((prev) => prev + 1);
  }, [count]);

  return (
    <div className="progress-bar">
      <div style={{ width: `${timer}0%` }} className="progress" />
    </div>
  );
};

export default ProgressBar;
