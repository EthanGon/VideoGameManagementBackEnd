const express = require("express");
const app = express();
const gameRoutes = require("./routes/game");

// Load config
require("dotenv").config({ path: "./config/.env" });

// Routes
app.use("/api/games", gameRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
