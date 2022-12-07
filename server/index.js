const express = require("express");
const cors = require("cors");
const gamesRouter = require("./routes/games.routes");
const conf = require("./config/config");

const PORT = process.env.PORT || conf.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", gamesRouter);

app.listen(PORT, () => console.log(`server started. PORT: ${PORT}`));
