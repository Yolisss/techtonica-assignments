import express from "express";
import cors from "cors";
import fetch from "node-fetch";

//express is a basic HTTP web server
//cors
//fetch is a module which will let you make a request to pull data from another web server

//const date = newDate
//every single object has built in methods to any type of obj that is a date
//class student = {
//     study();
//     eat();

// }

// const yolis = new Student

//express returns web server that can later be configured
//tells app which port to listen on
//client would be able to connect to it by making req on this port
const app = express();
const PORT = 8088;

//configures cors middleware "hey app I want you to use cors"
app.use(cors());

//allows us to see what's in 8088
//configuring express for how to handle requests
app.get("/", (req, res) => {
  res.send("hello again-we are the weather buddies");
});

app.get("/api/weather", (req, res) => {
  const apikey = "8c80bbaef511d8448eb495ac70bbabc1";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apikey}`;

  fetch(url) //making a request to openWeather app from backend, providing info to frontend to client
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
  //const WEATHER = [{ coord: { lat: 30, lon: 35 } }];
  //res.json(WEATHER);
});

app.listen(PORT, () => {
  console.log(`NINE NINE, listening on ${PORT}`);
});
