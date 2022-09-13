import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 8080;

app.use(cors());

//11-13 are implementing request handler
app.get("/", (req, resp) => {
  resp.json("Hello Techtonica game");
});

//11-13 are implementing request handler
//client will send req to this route,
//if there are any errors in fetching API,
app.get("/api/game", cors(), async (req, res) => {
  const API = `https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple`;
  //trycatch block. If there's anything within the tri
  //that throws an exception, then your catch can handle that exception so the whole prog doesn't die
  try {
    const response = await fetch(API);
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error("Fetch error: ", err);
  }
});

//tells app to start running
app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
