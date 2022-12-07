const Router = require("express");
const router = new Router();

const gamesController = require("../controller/GamesController");

router.post("/games", gamesController.createGame);
router.get("/games", gamesController.getGames);
router.get("/games/top", gamesController.getTopGames);

module.exports = router;
