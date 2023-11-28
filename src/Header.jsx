import { useTheme } from "./ThemeProvider";
import ThemeButton from "./ThemeButton";

const Header = () => {

  const { theme } = useTheme();

  let themeClass = theme === "light" ? "App-header-light" : "App-header-dark";

  return (
    <header className={themeClass}>
        <h1>Context API</h1> 
        <p>Current theme: {theme}</p>
        <ThemeButton />
    </header>
  );
}

export default Header;