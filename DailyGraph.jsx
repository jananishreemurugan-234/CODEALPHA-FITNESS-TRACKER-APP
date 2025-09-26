import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function DailyGraph({ activities }) {
  // Group calories by date
  const dailyCalories = {};
  activities.forEach(a => {
    dailyCalories[a.date] = (dailyCalories[a.date] || 0) + Number(a.calories);
  });

  const labels = Object.keys(dailyCalories).sort();
  const data = {
    labels,
    datasets: [
      {
        label: 'Calories Burned',
        data: labels.map(d => dailyCalories[d]),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4
      }
    ]
  };

  return (
    <div>
      <h2>Daily Calories Burned</h2>
      <Line data={data} />
    </div>
  );
}

export default DailyGraph;