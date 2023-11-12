import './App.css';
import React from 'react';
import { ThemeProvider } from "./ThemeProvider";
import Header from './Header';

function App() {  

  return (
    <>
      <ThemeProvider>
        <div className="App">
          <Header />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
