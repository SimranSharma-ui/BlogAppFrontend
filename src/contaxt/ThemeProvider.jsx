import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "Light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

 
  const HandleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, HandleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
