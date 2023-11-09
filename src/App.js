import './App.css';
import React from 'react';
import { ThemeProvider } from "./ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1>Context API</h1> 
          </header>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
