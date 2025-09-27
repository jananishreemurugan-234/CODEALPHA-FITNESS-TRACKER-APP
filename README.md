# CODEALPHA-FITNESS-TRACKER-APP

## Project Overview
The Fitness Tracker App is a full-stack web application developed as part of the CodeAlpha Internship (App Development Domain). Its purpose is to help users log fitness activities, track calories, and monitor progress with daily graphs.

Built with Node.js + Express.js (backend) and React.js (frontend), the app demonstrates strong skills in full-stack web development, API integration, and responsive design. Activity data is stored in a JSON file for persistence, making it lightweight and beginner-friendly.

## Objective
The objective of this project is to provide a personalized fitness tracker where users can:
- Log activities like walking, running, cycling, or yoga.
- Automatically calculate calories burned.
- Visualize progress through daily activity graphs.
- Access data on both desktop and mobile.
This project reflects practical learning and implementation during the CodeAlpha Internship.

## Features
- Add fitness activities (type, duration, date)
- Automatic calorie calculation
- Activity list with all logged entries
- Daily Graph Dashboard for progress visualization
- JSON file storage (activities.json) for persistence
- Mobile-responsive UI
- Local IP access for testing on smartphones

## User Interface
- Dashboard – Displays summary of activities (total count, duration, and calories burned).
- Add Activity Form – Allows adding new activity with type, duration, and name.
- Daily Graph – Visualizes calories burned per day in a line chart.
- Activity List – Displays logged activities with delete option.

## How It Works

### 1.Backend (Express.js)

`Runs on port 5000.`

#### Endpoints:

- GET /api/activities → Fetch all activities

- POST /api/activities → Add new activity

- Stores data in backend/data/activities.json.


### 2.Frontend (React.js)

`Runs on port 3000.`

- Fetches backend API via Axios.

- Renders forms, lists, and graphs.


### 3.Data Flow

- User adds activity → API call → Backend saves → Frontend updates dashboard.

## Installation & Setup

1️.Clone Repository

`git clone https://github.com/jananishreemurugan-234/CODEALPHA-FITNESS-TRACKER-APP.git`
`cd fitness-tracker-app`

2️.Backend Setup

`cd backend`
`npm install`
`node server.js`

`Backend URL → http://localhost:5000`

3️.Frontend Setup

`cd frontend`
`npm install`
`npm start`

`Frontend URL → http://localhost:3000`

4️.Mobile Access
Update frontend/src/config.js:

const API_BASE_URL = "http://your-ip:5000";

export default API_BASE_URL;

Open on phone → http://your-ip:3000

## Project Structure
`fitness-tracker-app/`

`│`

`├── backend/`

`│`   `├── data/`

`│`   `│`   `└── activities.json`

`│`   `├── server.js`

`│`   `└── package.json`

`│`

`├── frontend/`

`│`   `├── public/`

`│`   `│`   `└── index.html`

`│`   `├── src/`

`│`   `│`   `├── components/`

`│`   `│`   `│`   `├── ActivityForm.jsx`

`│`   `│`   `│`   `├── ActivityList.jsx`

`│`   `│`   `│`   `├── Dashboard.jsx`

`│`   `│`   `│`   `└── DailyGraph.jsx`

`│`   `│`   `├── App.jsx`

`│`   `│`   `├── index.js`

`│`   `│`   `├── config.js`

`│`   `│`   `└── styles.css`

`│`   `│`

`│`   `└── package.json`

## Conclusion

This Fitness Tracker App, built as part of the CodeAlpha Internship, highlights:

- React.js for dynamic frontend development

- Express.js for backend API handling

- JSON storage for lightweight persistence

- Graph integration for daily activity insights

It serves as a strong portfolio project showcasing end-to-end web development skills.

## Future Enhancements
- Use MongoDB for real database support
- Add authentication (user login)
- Dark/light mode toggle
- Convert into a React Native mobile app

## Output
### Desktop
<img width="1125" height="680" alt="Screenshot 2025-09-10 062841" src="https://github.com/user-attachments/assets/2d436670-84b8-48e2-86f8-b29b6eb2742c" />
<img width="1126" height="1126" alt="Screenshot 2025-09-10 062900" src="https://github.com/user-attachments/assets/238b5863-8c71-457d-a480-94b4dfd1976e" />

### Mobile
<img width="393" height="934" alt="Screenshot 2025-09-27 150254" src="https://github.com/user-attachments/assets/f7d6e569-e364-401d-8f24-d59301e756b3" />
<img width="492" height="424" alt="Screenshot 2025-09-27 150322" src="https://github.com/user-attachments/assets/7db8aa00-f800-462c-b296-1d19a796d35e" />
