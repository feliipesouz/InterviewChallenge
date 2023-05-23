import { useState } from "react";
import "./App.css";

function App() {
  const [ball, setBall] = useState([]);
  const [ballUndid, setBallUndid] = useState([]);

  function handleClick(event) {
    const click = {
      clientX: event.clientX,
      clientY: event.clientY,
    };
    console.log(click);
    setBall((dot) => [...dot, click]);
  }

  function handleDelete(event) {
    event.stopPropagation();
    console.log("apagou");

    if (ball.length === 0) {
      return;
    }

    const lastItem = ball[ball.length - 1];
    setBallUndid((dot) => [...dot, lastItem]);

    setBall((dot) => {
      const newArray = [...ball].slice(0, -1);
      return newArray;
    });
  }

  function handleDid(event) {
    event.stopPropagation();
    console.log("Did");

    const recoverBall = ballUndid[ballUndid.length - 1];
    setBallUndid((dot) => {
      const newArray = [...dot].slice(0, -1);
      return newArray;
    });
  }

  return (
    <div className={"container"} onClick={handleClick}>
      <button onClick={handleDelete}>Apagar</button>
      <button onClick={handleDid}>Refazer</button>
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
