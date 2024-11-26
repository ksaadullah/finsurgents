import React from "react";
import "./activity.css";

const Activity = () => {
  return (
    <div className="activity-container">
      <div>
        <h1 className="heading">Activity</h1>
      </div>
      {/* Circle Visualization */}
      <div className="circle-container">
        <div className="circle green">
          <span className="amount">Rs. 3,200</span>
          <span className="label">Online Shopping</span>
        </div>
        <div className="circle white">
          <span className="amount">Rs. 1,200</span>
          <span className="label">Taxi</span>
        </div>
        <div className="circle gray">
          <span className="amount">Rs. 2,000</span>
          <span className="label">Food</span>
        </div>
      </div>

      {/* Comparison Text */}
      <div>
        <p className="comparisontext">Comparison (Month)</p>
      </div>

      {/* Progress Bars */}
      <div className="progress-container">
        <div className="progress-item">
          <span className="labelmonth">This Month</span>
          <div className="progress-bar">
            <div className="progress greenbar"></div>
          </div>
        </div>
        <div className="progress-item">
          <span className="labelmonth">This Month</span>
          <div className="progress-bar">
            <div className="progress graybar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
