# 🖥️ Video Game Management – Back End

- **GitHub Front-End Repo:** [https://github.com/EthanGon/VideoGameManagementFrontEnd](https://github.com/EthanGon/VideoGameManagementFrontEnd)

## 🚀 Project Overview

This is the back-end of my **Video Game Management Application**, built with Express.js. It provides a RESTful API that allows users to:

- Search for games via the IGDB API
- Add games to a personal list stored in MongoDB
- View, update, and delete games in their list

The API exposes the following endpoints:

- `GET /api/games/search/:query` – Search for games using a title (via IGDB API)
- `GET /api/games` – Get all saved games from the database
- `GET /api/games/:id` – Get a specific game by ID
- `POST /api/games` – Add a new game to the database
- `PUT /api/games/:id` – Update the status of a game
- `DELETE /api/games/:id` – Delete a game from the database

The back end uses **MongoDB** with **Mongoose** for data modeling and supports full CRUD operations. Additional middleware and tools include:

- **Morgan** – Logs all API requests
- **Helmet** – Adds basic security headers
- **Dotenv** – Loads environment variables from `.env`
- **Cors** – Controls which origins can access the API
- **Nodemon** – Automatically restarts the server during development

## 🛠️ Technologies Used

- **Express.js**
- **MongoDB + Mongoose**
- **Cors**
- **Dotenv**
- **Helmet**
- **Morgan**
- **Nodemon**

## 🧰 Installation & Setup

1. Clone the repository:  
   git clone

2. Navigate to the project directory and install dependencies:  
   npm install

3. Create a `.env` file in the root directory with the following variables:

   - IGDB_TWITCH_CLIENT_ID=your_client_id
   - IGDB_TWITCH_ACCESS_TOKEN=your_access_token
   - PORT=your_port_number
   - DATABASE_URI=your_mongodb_connection_string

4. Start the development server:  
   npm run dev

✅ Make sure the front-end app is running if you want to test full-stack functionality.

## 🌐 Live Demo

- **Front-End:** [https://videogamemanagement.onrender.com](https://videogamemanagement.onrender.com)
- **Back-End (API):** [https://videogamemanagementbackend-api.onrender.com](https://videogamemanagementbackend-api.onrender.com)

⏳ _Note_: Since the app is hosted on Render’s free plan, the back-end may take a few seconds to wake up after being idle.

## 📝 Notes

This project helped me learn how to:

- Build and deploy a RESTful API using **Express.js**
- Work with **MongoDB** and **Mongoose** for backend data storage
- Handle environment variables and secure the app with **Helmet**
- Use **Cors** to manage access from different origins
- Troubleshoot deployment and CORS issues

Special thanks to **ChatGPT** and **YouTube tutorials** that guided me through common challenges with deployment, CORS, and working with third-party APIs like IGDB.
