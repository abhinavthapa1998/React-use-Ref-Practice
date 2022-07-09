import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState("");
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
  const stopTimer = () => {};
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
