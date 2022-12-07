const db = require("../db");
class GamesController {
  async createGame(req, res) {
    const { name, score } = req.body;
    const newGame = await db.query(
      "INSERT INTO games (name, score) VALUES ($1, $2) RETURNING *",
      [name, +score]
    );
    res.json(newGame.rows[0]);
  }
  async getGames(req, res) {
    const games = await db.query("SELECT * FROM games");
    res.json(games.rows);
  }
  async getTopGames(req, res) {
    const topGames = await db.query(
      "SELECT * FROM games ORDER BY score DESC LIMIT 10;"
    );
    res.json(topGames.rows);
  }
}
module.exports = new GamesController();
