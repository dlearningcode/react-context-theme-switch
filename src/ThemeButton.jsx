import React, { useContext } from 'react';
import { ThemeContext } from "./ThemeProvider";

const ThemeButton = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  let buttonClass = theme === "light" ? "button-light" : "button-dark";


  return (
    <button
        className={buttonClass}
        onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}

export default ThemeButton;