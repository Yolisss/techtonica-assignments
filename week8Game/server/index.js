import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 8080;

app.use(cors());

app.get("/", (req, resp) => {
  resp.json("Hello Techtonica game");
});

app.get("/api/game", cors(), async (req, res) => {
  const API = `https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple`;
  try {
    const response = await fetch(API);
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error("Fetch error: ", err);
  }
});

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
