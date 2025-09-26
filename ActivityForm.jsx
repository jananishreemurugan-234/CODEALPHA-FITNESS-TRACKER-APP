import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

function ActivityForm({ fetchActivities }) {
  const [activity, setActivity] = useState({ name: "", type: "Cardio", duration: "" });

  const handleChange = e => setActivity({ ...activity, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    let calories = 0;
    const duration = Number(activity.duration);
    switch (activity.type) {
      case "Cardio": calories = duration * 8; break;
      case "Strength": calories = duration * 6; break;
      case "Yoga": calories = duration * 4; break;
      default: calories = duration * 5; break;
    }

    await axios.post(`${BASE_URL}/api/activities`, {
      ...activity,
      calories,
      date: new Date().toISOString().split("T")[0]
    });
    setActivity({ name: "", type: "Cardio", duration: "" });
    fetchActivities();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
      <input type="text" name="name" placeholder="Activity Name" value={activity.name} onChange={handleChange} required />
      <select name="type" value={activity.type} onChange={handleChange}>
        <option value="Cardio">Cardio</option>
        <option value="Strength">Strength</option>
        <option value="Yoga">Yoga</option>
      </select>
      <input type="number" name="duration" placeholder="Duration (min)" value={activity.duration} onChange={handleChange} required />
      <button type="submit">Add Activity</button>
    </form>
  );
}

export default ActivityForm;