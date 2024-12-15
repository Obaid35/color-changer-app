import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import "./styles.css";
import ColorButton from "./components/ColorButton.jsx"

const App = () => {
  const [color, setColor] = useState("#ffffff");
  const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];
  const gradients = [
    "linear-gradient(to right, red, yellow)",
    "linear-gradient(to top, blue, green)",
    "linear-gradient(to left, pink, purple)",
  ];

  useEffect(() => {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      setColor(savedColor);
    }
  }, []);

  const changeColor = (newColor) => {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.background = ""; 
    document.body.style.backgroundColor = newColor;
    localStorage.setItem("backgroundColor", newColor);
    setColor(newColor);
  };

  const changeGradient = (gradient) => {
    document.body.style.transition = "background 0.5s ease";
    document.body.style.background = gradient;
  };


  const toggleTheme = () => {
    const isDarkMode = document.body.style.backgroundColor === "black";
    document.body.style.background = "";
    document.body.style.backgroundColor = isDarkMode ? "white" : "black";
    document.body.style.color = isDarkMode ? "black" : "white";
  };

  const toggleHighContrast = () => {
    document.body.classList.toggle("high-contrast");
  };

  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    changeColor(randomColor);
  };

  return (
    <div>
      <h1>Color Changer</h1>
      <div>
        {colors.map((color) => (
          <ColorButton key={color} color={color} changeColor={changeColor} />
        ))}
      </div>
      <div>
        {gradients.map((gradient, index) => (
          <button
            key={index}
            className="gradient-button"
            style={{ background: gradient }}
            onClick={() => changeGradient(gradient)}
          >
            Gradient {index + 1}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <h2>Pick a Custom Color</h2>
        <div className="color-picker-container">
          <ChromePicker color={color} onChangeComplete={(color) => changeColor(color.hex)} />
        </div>
      </div>

      <div>
        <button className="button button-dark" onClick={toggleTheme}>
          Toggle Dark/Light Mode
        </button>
        <button className="button button-contrast" onClick={toggleHighContrast}>
          Toggle High Contrast Mode
        </button>
        <button className="button button-random" onClick={randomColor}>
          Random Color
        </button>
      </div>
    </div>
  );
};

export default App;
