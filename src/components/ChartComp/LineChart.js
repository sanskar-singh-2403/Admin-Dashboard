import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

// Chart.defaults.global.legend.labels.usePointStyle = true;

const labels = [
  ["25", "Aug"],
  ["26", "Aug"],
  ["27", "Aug"],
  ["28", "Aug"],
  ["29", "Aug"],
  ["30", "Aug"],
  ["31", "Aug"],
];

const options = {
  responsive: true,
  scales: {
    y: {
      title: {
        display: true,
        text: "Number of patients consulted",
      },
      max: 400,
      min: 100,
      ticks: {
        stepSize: 100,
      },
    },
  },
  plugins: {
    padding: 12,
    legend: {
      position: "bottom",
      minHeight: 500,
      labels: {
        padding: 60,
        font: {
          size: 18,
          weight: 600,

        },
        boxHeight: 20,
        usePointStyle: true,
      }
    },
  }
};
const data = {
  labels: labels,
  datasets: [
    {
      label: [["61"]],
      data: [180, 240, 380, 220, 180, 310, 290],
      fill: false,
      borderColor: "#DC796F",
      pointStyle: "line",
      borderWidth: 5,
      point: "50px",
    },

    {
      label: [["15"]],
      data: [210, 350, 275, 280, 190, 260, 310],
      fill: false,
      borderColor: "#496AD2",
      pointStyle: "line",
      borderWidth: 5,
      point: "50px",
    },
    {
      label: [["12"]],
      data: [140, 210, 165, 200, 150, 140, 200],
      fill: false,
      borderColor: "#FDBC60",
      pointStyle: "line",
      borderWidth: 5,
      point: "50px",
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;