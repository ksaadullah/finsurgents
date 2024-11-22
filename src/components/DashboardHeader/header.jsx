import React from "react";
import "./header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Dashboard</h1>
      </div>
      <div className="header-icons">
        <img src="icons/search.png" alt="Search"/>
        <img src="icons/warnings.png" alt="Warnings"/>
        <img src="icons/options.png" alt="Options"/>
      </div>
    </header>
  );
};

export default Header;
