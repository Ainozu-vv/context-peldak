import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    //<html> --> data-bs-theme
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t == "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error("...");
  }
  return value;
}
export { useTheme };
