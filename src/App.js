import './App.css';
import React, { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';
import { ThemeProvider } from "./ThemeProvider";

function App() {
  const [theme, setTheme] = useState("light");
  // const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme)
  let themeClass = theme === "light" ? "App-header-light" : "App-header-dark";

  return (
    <>
      <ThemeProvider>
        <div className="App">
          <header className={themeClass}>
            <h1>Context API</h1> 
            <p>Current theme: {theme}</p>
            <button onClick={() => {setTheme(theme === "light" ? "dark" : "light")}}>Toggle Theme</button>
          </header>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
