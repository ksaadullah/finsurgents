import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
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
              alt="Dashboard"
              className="nav-icon"
            />
            Payments
          </li>
          <li>
            <img src="icons/ledger.png" alt="Dashboard" className="nav-icon" />
            Ledger
          </li>
          <li>
            <img
              src="icons/notification.png"
              alt="Dashboard"
              className="nav-icon"
            />
            Notifications
          </li>
          <li>
            <img src="icons/setting.png" alt="Dashboard" className="nav-icon" />
            Settings
          </li>
        </ul>
      </div>
      <div className="preferences">
        <p className="preferences-text">Preferences</p>
      </div>
      <div>
        <ul className="nav">
          <li>
            <img src="icons/theme.png" alt="Theme" className="nav-icon" />
            Theme
          </li>
          <li>
            <img src="icons/security.png" alt="Security" className="nav-icon" />
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
