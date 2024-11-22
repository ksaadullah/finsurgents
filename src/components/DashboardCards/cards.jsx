import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./cards.css";

const DashboardCards = () => {
  const [selectedCard, setSelectedCard] = useState(null); // Track the active card

  const cardData = [
    {
      id: 1,
      title: "Total Balance",
      value: "Rs. 3,120.54",
      defaultIcon: "icons/wallet.png",
      activeIcon: "icons/selectwallet.png", // Icon when active
    },
    {
      id: 2,
      title: "Total Spending",
      value: "Rs. 42.43",
      defaultIcon: "icons/wallet.png",
      activeIcon: "icons/selectwallet.png", // Icon when active
    },
    {
      id: 3,
      title: "Money Saved",
      value: "Rs. 501.65",
      defaultIcon: "icons/wallet.png",
      activeIcon: "icons/selectwallet.png", // Icon when active
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id); // Set the clicked card as active
  };

  return (
    <div style={{ width: "1100px" }}>
      {/* Card Section */}
      <div className="card-container">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className={`dashboard-card ${
              selectedCard === card.id ? "active-card" : ""
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <CardContent>
              <img
                src={
                  selectedCard === card.id ? card.activeIcon : card.defaultIcon
                }
                alt={card.title}
                className="card-icon"
              />
              <Typography className="card-title">{card.title}</Typography>
              <span className="card-value">{card.value}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
