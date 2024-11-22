import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import overviewData from "./overviewData.json";
import "./overview.css";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Overview = () => {
  const data = {
    labels: overviewData.map((data) => data.label),
    datasets: [
      {
        label: "Amount",
        data: overviewData.map((data) => data.value),
        backgroundColor: ["rgba(37, 201, 53, 1)"],
        borderRadius: 100,
        barThickness: 30,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false }, // Hide legend for a clean look
      title: { display: true, text: "Overview" },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to grow with the container
    scales: {
      x: {
        grid: { display: false }, // Hide x-axis grid
        ticks: { font: { family: "Poppins", size: 12 } }, // Font styling for x-axis labels
      },
      y: {
        grid: { drawBorder: false, color: "#eaeaea" }, // Light y-axis grid
        ticks: { font: { family: "Poppins", size: 12 } }, // Font styling for y-axis labels
        display: false,
      },
    },
  };

  return (
    <div className="overview-container">
      <h2 className="overview-title">Overview</h2>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Overview;
