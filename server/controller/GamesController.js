const db = require("../db");
class GamesController {
  async createGame(req, res) {
    try {
      const { name, score } = req.body;
      const newGame = await db.query(
        "INSERT INTO games (name, score) VALUES ($1, $2) RETURNING *",
        [name, +score]
      );
      res.json(newGame.rows[0]);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
  async getGames(req, res) {
    try {
      const games = await db.query("SELECT * FROM games");
      res.json(games.rows);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
  async getTopGames(req, res) {
    try {
      const topGames = await db.query(
        "SELECT * FROM games ORDER BY score DESC LIMIT 10;"
      );
      res.json(topGames.rows);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
}
module.exports = new GamesController();
