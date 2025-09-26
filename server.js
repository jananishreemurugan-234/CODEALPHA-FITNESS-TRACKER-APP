const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const activitiesFile = path.join(__dirname, "data/activities.json");

const readData = () => JSON.parse(fs.readFileSync(activitiesFile, "utf8"));
const writeData = (data) => fs.writeFileSync(activitiesFile, JSON.stringify(data, null, 2));

// Get all activities
app.get("/api/activities", (req, res) => res.json(readData()));

// Add new activity
app.post("/api/activities", (req, res) => {
  const activities = readData();
  const newActivity = { ...req.body, id: Date.now().toString() };
  activities.push(newActivity);
  writeData(activities);
  res.json(newActivity);
});

// Delete activity
app.delete("/api/activities/:id", (req, res) => {
  let activities = readData();
  activities = activities.filter(a => a.id !== req.params.id);
  writeData(activities);
  res.json({ message: "Activity deleted" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));