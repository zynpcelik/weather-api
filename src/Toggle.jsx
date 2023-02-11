import React from "react";
import { useTheme } from "./ThemeContext";
import "./App.css";

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="toggle">
      <button
        className={theme === "black" ? "button-dark" : "button-light"}
        type="submit"
        onClick={() => setTheme(theme === "black" ? "light" : "black")}
      >
        Switch Mode
      </button>
    </div>
  );
};

export default Toggle;
