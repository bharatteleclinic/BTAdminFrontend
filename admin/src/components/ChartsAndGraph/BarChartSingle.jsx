import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartSingle = () => {
    const data = {
        labels: ['OCT15','OCT15',"OCT15","OCT15","OCT15","OCT15"], // Label for the x-axis
        datasets: [
          {
            label: 'Appointments',
            data: [6,6,6,6,6,6], // Single data point with a value of 5
            backgroundColor: '#007bff', // Blue color for the bar
            barThickness: 70 // Controls the thickness of the bar
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
            max: 10, // Set maximum value of the y-axis to 5
          },
        },
        plugins: {
          legend: { display: false }, // Hide legend
        },
      };

  return   <Bar data={data} options={options} />;
}

export default BarChartSingle
