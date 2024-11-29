import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GenderDistributionChart = () => {
    const data = {
      labels: ['Male', 'Female'],
      datasets: [
        {
          label: 'Gender Distribution',
          data: [100, 0], // 100% Male, 0% Female
          backgroundColor: ['#f06543', '#E0E0E0'], // Color for Male and Female bars
          borderRadius: 0,
          barThickness: 20,
        },
      ],
    };
  
    const options = {
      indexAxis: 'y', // This makes the chart horizontal
      scales: {
        x: {
          beginAtZero: true,
          max: 100, // Set the max to 100% for percentage representation
          ticks: {
            callback: (value) => `${value}%`, // Adds a % sign to the x-axis labels
          },
        },
      },
      plugins: {
        legend: { display: false }, // Hide the legend
        tooltip: {
          callbacks: {
            label: (context) => `${context.raw}%`, // Display percentage in tooltip
          },
        },
      },
    };
  
    return <Bar data={data} options={options}></Bar>;
  };
  
  export default GenderDistributionChart;