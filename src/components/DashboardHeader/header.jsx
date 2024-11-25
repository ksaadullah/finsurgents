import React from "react";
import { useTheme } from "../Theme/themeContext"; // Import ThemeContext
import "./header.css";

const Header = () => {
  const { isDarkMode } = useTheme(); // Access dark mode state

  return (
    <header className={`header-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="header-title">
        <h1>Dashboard</h1>
      </div>
      <div className="header-icons">
        <img src="icons/search.png" alt="Search" />
        <img src="icons/warnings.png" alt="Warnings" />
        <img src="icons/options.png" alt="Options" />
      </div>
    </header>
  );
};

export default Header;
