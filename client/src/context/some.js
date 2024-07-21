import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const themeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode)
  }



  return (<ThemeContext)
}
