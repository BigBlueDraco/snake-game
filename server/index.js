const express = require("express");
const cors = require("cors");
const gamesRouter = require("./routes/games.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", gamesRouter);

app.listen(PORT, () => console.log(`server started. PORT: ${PORT}`));
