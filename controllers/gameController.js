const Game = require("../models/Game");
const BASEURL = "https://api.igdb.com/v4/games";

module.exports = {
  getGames: async (req, res) => {
    const games = await Game.find();
    res.status(200).json(games);
  },
  getGame: async (req, res) => {
    try {
      const { id } = req.params;

      const query = `fields name, id, summary, cover.image_id; where id = ${id};`;

      const response = await fetch(BASEURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": process.env.VITE_TWITCH_CLIENT_ID,
          Authorization: `Bearer ${process.env.VITE_TWITCH_ACCESS_TOKEN}`,
        },
        body: query,
      });

      const json = await response.json();

      const games = json.map((game) => {
        const imageId = game.cover?.image_id;
        return {
          gameId: game.id,
          title: game.name,
          description: game.summary,
          cover: imageId
            ? `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${imageId}.jpg`
            : null,
        };
      });

      if (!response.ok) {
        throw Error(`The game with id = ${id} could not be found.`);
      }

      const game = await Game.findOne({ gameId: id });

      const status = game ? game.status : null;

      res.status(200).json({ ...games[0], status });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  searchGames: async (req, res) => {
    try {
      const query = `search "${req.params.query}"; fields name, id, summary, cover.image_id;`;

      const response = await fetch(BASEURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": process.env.VITE_TWITCH_CLIENT_ID,
          Authorization: `Bearer ${process.env.VITE_TWITCH_ACCESS_TOKEN}`,
        },
        body: query,
      });

      const json = await response.json();

      const games = json.map((game) => {
        const imageId = game.cover?.image_id;
        return {
          gameId: game.id,
          title: game.name,
          description: game.summary,
          cover: imageId
            ? `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${imageId}.jpg`
            : null,
        };
      });

      res.status(200).json(games);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  addGame: async (req, res) => {
    try {
      const { gameId, title, description, cover, status } = req.body;

      const existingGame = await Game.findOne({ gameId });

      if (existingGame) {
        throw Error("Already added game to the list.");
      }

      const game = await Game.create({
        gameId,
        title,
        description,
        cover,
        status,
      });

      res.status(200).json(game);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  updateGame: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const query = `fields name, id, summary, cover.image_id; where id = ${id};`;

      const response = await fetch(BASEURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": process.env.VITE_TWITCH_CLIENT_ID,
          Authorization: `Bearer ${process.env.VITE_TWITCH_ACCESS_TOKEN}`,
        },
        body: query,
      });

      if (!response.ok) {
        throw Error(`The game with id = ${id} could not be found.`);
      }

      const game = await Game.findOne({ gameId: id });

      if (!game) {
        throw Error("Game has not been added to the list.");
      }

      game.status = status;
      await game.save();

      res.status(200).json(game);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deleteGame: async (req, res) => {
    res.status(200).json("deleteGame method");
  },
};
