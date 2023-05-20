import { useState } from "react";
import "./App.css";

function App() {
  const [ball, setBall] = useState([]);

  function handleClick(event) {
    const click = {
      clientX: event.clientX,
      clientY: event.clientY,
    };
    console.log(click);
    setBall((dot) => [...dot, click]);
  }

  return (
    <div className={"container"} onClick={handleClick}>
      {ball.map((dot, index) => (
        <span
          key={index}
          className={"ball"}
          style={{ left: dot.clientX, top: dot.clientY }}
        />
      ))}
    </div>
  );
}

export default App;
