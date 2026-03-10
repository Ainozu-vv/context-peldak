import React from "react";
import { useTheme } from "./Contexts/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      Theme: {theme == "light" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeButton;
