const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.get("/", gameController.getGames);
router.get("/:id", gameController.getGame);
router.get("/search/:query", gameController.searchGames);
router.post("/", gameController.addGame);
router.put("/:id", gameController.updateGame);
router.delete("/:id", gameController.deleteGame);

module.exports = router;
