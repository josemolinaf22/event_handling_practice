import React, { useState } from "react";

function App() {
  const [greetingTxt, setGreetingTxt] = useState("Hello");
  const [colorChange, setColorChange] = useState(false);

  const clickHandler = () => {
    setGreetingTxt("Submitted");
  };

  const handleMouseOver = () => {
    setColorChange(true);
  };

  const handleMouseOut = () => {
    setColorChange(false);
  };

  return (
    <div className="container">
      <h1>{greetingTxt}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: colorChange ? "black" : "white" }}
        onClick={clickHandler}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
