import React from "react";
import axios from "axios";
import { BASE_URL } from "../config";

function ActivityList({ activities, fetchActivities }) {
  const deleteActivity = async id => {
    await axios.delete(`${BASE_URL}/api/activities/${id}`);
    fetchActivities();
  };

  return (
    <div>
      <h2>Activities</h2>
      {activities.map(act => (
        <div key={act.id} className="client-card">
          <p>{act.name} - {act.type} - {act.duration} min - {act.calories} cal</p>
          <button onClick={() => deleteActivity(act.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ActivityList;