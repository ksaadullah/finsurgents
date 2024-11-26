import React from "react";
import { useTheme } from "./components/Theme/themeContext"; // Import ThemeContext
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/DashboardHeader/header";
import "./App.css";
import DashboardCards from "./components/DashboardCards/cards";
import Overview from "./components/Overview/overview";
import TransactionHistory from "./components/Transaction/transaction";
import Activity from "./components/Activity/activity";

const App = () => {
  const { isDarkMode } = useTheme(); // Access dark mode state

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-container">
        <Header />
        <div
          className="main-container"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: isDarkMode ? "#181818" : "#ffffff",
            color: isDarkMode ? "#ffffff" : "#000000",
          }}
        >
          <div className="main-container-top">
            <div
              className="main-container-top-left"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                flexGrow: "1.1",
              }}
            >
              <DashboardCards />
              <Overview />
            </div>
            <div
              className="main-container-top-right"
              style={{
                backgroundColor: isDarkMode ? "#282828" : "#ffffff",
                color: isDarkMode ? "#ffffff" : "#000000",
                marginTop: "20px",
                marginRight: "37px",
                boxShadow: isDarkMode
                  ? "0px 1px 5px rgba(255, 255, 255, 0.1)"
                  : "0px 1px 5px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
            >
              <Activity />
            </div>
          </div>
          <div
            className="main-container-bottom"
            style={{
              backgroundColor: isDarkMode ? "#202020" : "#f9f9f9",
              color: isDarkMode ? "#ffffff" : "#000000",
            }}
          >
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
