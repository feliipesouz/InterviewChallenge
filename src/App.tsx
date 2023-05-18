import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import LogicalClick from "./components/LogicalClick/index";

function App() {
  const [ball, setBall] = useState([]);

  function handleClick(event) {
    console.log("foi");
    let click = {
      clientX: event.clientX,
      clientY: event.clientY,
    };
    setBall((dot) => [...dot, click]);
  }

  // const containerRef = useRef(null);

  // useLayoutEffect(() => {
  //   console.log(containerRef.current);
  //   const element = document.getElementById("my-element");
  //   element!.addEventListener("mousemove", (event) => {
  //     let x = event.clientX;
  //     let y = event.clientY;
  //     console.log(`A posição atual do cursor do mouse é: (${x}, ${y})`);
  //   });
  // });

  return (
    <div className={"container"}>
      {ball.map((dot, index) => (
        <div key={index} className={"ball"} onClick={handleClick} />
      ))}
      {/* <LogicalClick
        ref={containerRef}
        x={x}
        y={y}
        qtyBall={ball}
        sumBall={setBall}
      /> */}
    </div>
  );
}

export default App;
