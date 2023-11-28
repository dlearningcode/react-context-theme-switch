import { useTheme } from "./ThemeProvider";

const ThemeButton = () => {

  const { theme, toggleTheme } = useTheme();

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