import React, { useState, createContext, useContext } from "react";

export const ThemeContext = createContext("light");

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);