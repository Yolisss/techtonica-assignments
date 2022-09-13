import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 8080;

app.use(cors());

//16 data will go back to the router

app.get("/api/cat", async (req, resp) => {
  const URL = "https://catfact.ninja/fact";
  const response = await fetch(URL);
  const data = await response.json();
  resp.send(data);
});

app.listen(PORT, () => console.log("Hello Techtonica"));
