import React from "react";

function Dashboard({ activities }) {
  const totalActivities = activities.length;
  const totalCalories = activities.reduce((sum, a) => sum + Number(a.calories || 0), 0);
  const totalDuration = activities.reduce((sum, a) => sum + Number(a.duration || 0), 0);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Activities: {totalActivities}</p>
      <p>Total Duration: {totalDuration} min</p>
      <p>Total Calories Burned: {totalCalories}</p>
    </div>
  );
}

export default Dashboard;