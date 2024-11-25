import React from "react";
import { useTheme } from "../Theme/themeContext";
import "./sidebar.css";

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`sidebar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="logo-container">
        <img src="icons/appLogo.png" alt="LOGO" className="logo-icon" />
        <div className="logo-text">FinSurgents</div>
      </div>
      <div className="manage">
        <p className="manage-text">Manage</p>
      </div>
      <div>
        <ul className="nav">
          <li>
            <img src="icons/DB.png" alt="Dashboard" className="nav-icon" />
            Dashboard
          </li>
          <li>
            <img
              src="icons/payments.png"
              alt="Payments"
              className="nav-icon"
            />
            Payments
          </li>
          <li>
            <img src="icons/ledger.png" alt="Ledger" className="nav-icon" />
            Ledger
          </li>
          <li>
            <img
              src="icons/notification.png"
              alt="Notifications"
              className="nav-icon"
            />
            Notifications
          </li>
          <li>
            <img src="icons/setting.png" alt="Settings" className="nav-icon" />
            Settings
          </li>
        </ul>
      </div>
      <div className="preferences">
        <p className="preferences-text">Preferences</p>
      </div>
      <div>
        <ul className="nav">
          <li onClick={toggleTheme} className="theme-toggle">
            <img src="icons/theme.png" alt="Theme" className="nav-icon" />
            {isDarkMode ? "Theme" : "Theme"}
          </li>
          <li>
            <img
              src="icons/security.png"
              alt="Security"
              className="nav-icon"
            />
            Security
          </li>
        </ul>
      </div>
      <div className="user">
        <div className="user-info">
          <img src="icons/profile.png" alt="Profile" className="user-icon" />
          <div className="user-details">
            <p className="user-name">Imran Khan</p>
            <p className="user-email">ik@finsurgents.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
