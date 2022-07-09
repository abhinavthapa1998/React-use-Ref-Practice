import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const timerId = useRef();
  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };
  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };
  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };
  return (
    <div className="App">
      <h1>React UseRef</h1>
      <section>
        <input
          type="text"
          value={randomInput}
          placeholder="Random Input"
          onChange={handleChange}
        />
        <p>Using useRef</p>
        <p>Renders: {renders.current}</p>
        <br />
        <br />
      </section>
      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        <br />
        <br />
        <p>Using useState</p>
        <p>Seconds: {seconds}</p>
        <p>Random Input: {randomInput}</p>
      </section>
    </div>
  );
}
