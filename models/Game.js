const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    gameId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["playing", "completed", "planning"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", GameSchema);
