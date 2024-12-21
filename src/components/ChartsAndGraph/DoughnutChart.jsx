import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js";
chartjs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: [],
    datasets: [
      {
        // label: "Patients by Age Group",
        data: [50, 50, 0, 0, 0], // Match the percentages shown in the image
        backgroundColor: [
          "#3b8b94",
          "#4b0082",
          "#ff6f61",
          "#ffa500",
          "#e6e6fa",
        ],
        hoverBackgroundColor: [
          "#367f88",
          "#400070",
          "#ff564c",
          "#e59500",
          "#dcd0ff",
        ],
        borderWidth: 0, // Remove border for smooth appearance
      },
    ],
  };

  const options = {
    cutout: "50%", // This creates the inner empty circle for the doughnut
    plugins: {
      legend: {
        position: "left",
        labels: {
          color: "#000", // Legend text color
        },
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options}></Doughnut>
    </>
  );
};

export default DoughnutChart;
