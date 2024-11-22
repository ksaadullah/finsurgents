import React from "react";
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/DashboardHeader/header";
import "./App.css";
import DashboardCards from "./components/DashboardCards/cards";
import Overview from "./components/Overview/overview";
import TransactionHistory from "./components/Transaction/transaction";
import Activity from "./components/Activity/activity";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div
          className="main-container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="main-container-top"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
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
                backgroundColor: "white",
                marginTop: "20px",
                marginRight: "37px",
                boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px"
              }}
            >
              <Activity />
            </div>
          </div>
          <div className="main-container-bottom">
            <TransactionHistory />
          </div>
        </div>

        {/*  */}

        {/* <div className="content"></div> */}
      </div>
    </div>
  );
};

export default App;
