import React from "react";
import "./transaction.css";

const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      name: "Uzair Zafar",
      avatar: "icons/uzair.png", // Replace with actual avatar image
      type: "Online Payment",
      status: "In Progress",
      statusColor: "#CFCFCF", // Light gray color for "In Progress"
      date: "Oct 12, 2024",
      amount: "Rs. 783",
    },
    {
      id: 2,
      name: "Bassam Siddiqui",
      avatar: "icons/bassam.png", // Replace with actual avatar image
      type: "Online Payment",
      status: "Done",
      statusColor: "#25C935", // Green color for "Done"
      date: "Oct 10, 2024",
      amount: "Rs. 9,500",
    },
  ];

  return (
    <div className="transaction-container">
      <h2 className="transaction-title">Transaction History</h2>
      <div className="transaction-table">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-row">
            <div className="transaction-details">
              <img
                src={transaction.avatar}
                alt={transaction.name}
                className="transaction-avatar"
              />
              <div>
                <p className="transaction-name">{transaction.name}</p>
                <p className="transaction-type">{transaction.type}</p>
              </div>
            </div>
            <p
              className="transaction-status"
              style={{ color: transaction.statusColor }}
            >
              {transaction.status}
            </p>
            <p className="transaction-date">{transaction.date}</p>
            <p className="transaction-amount">{transaction.amount}</p>
            <div className="transaction-options">•••</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
