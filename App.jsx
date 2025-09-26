import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./config";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import Dashboard from "./components/Dashboard";
import DailyGraph from "./components/DailyGraph";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    const res = await axios.get(`${BASE_URL}/api/activities`);
    setActivities(res.data);
  };

  return (
    <div className="container">
      <h1>Fitness Tracker</h1>
      <Dashboard activities={activities} />
      <ActivityForm fetchActivities={fetchActivities} />
      <DailyGraph activities={activities} />
      <ActivityList activities={activities} fetchActivities={fetchActivities} />
    </div>
  );
}

export default App;