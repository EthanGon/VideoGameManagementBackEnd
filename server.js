const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/database");
const gameRoutes = require("./routes/game");

// Load config
require("dotenv").config({ path: "./config/.env" });

// Database Connection
connectDB();

// Secure express app
app.use(helmet());

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(morgan("dev"));

// Routes
app.use("/api/games", gameRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
