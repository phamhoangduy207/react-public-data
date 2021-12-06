import React, { useEffect, useState } from "react";
import "./Time.css";

function Time() {
  const [clock, setClock] = useState({
    date: new Date(),
    color: "blue",
  });

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    document.title = `${clock.color}`;
    return () => clearInterval(timerID);
  });

  function tick() {
    setClock({
      date: new Date(),
      color: clock.color
    });
  }

  function changeColor() {
    const newColor = clock.color === "red" ? "blue" : "red";
    setClock({
      date: new Date(),
      color: newColor,
    });
  }

  return (
    <div className="clock">
      <h2 onClick={changeColor} style={{ color: clock.color }}>
        {clock.date.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default Time;
