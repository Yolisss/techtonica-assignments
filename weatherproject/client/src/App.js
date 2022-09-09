import "./App.css";
import "./components/weather";
import { useState } from "react";

function App() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/weather');
    .then(res => res.json())
    .then(data => setResult(data))
console.log(data);
    setZip("");

  };
  // //city country , temp,
  // // "main": {
  // //     "temp": 304,
  // //     "feels_like": 304.63,
  // // "wind": {
  // //     "speed": 5.66,
  // // },
  // // "clouds": {
  // //     "all": 75
  return (
    <div className="App">
      <div className="weather">
        <h1 className="weatherHeader">Weather Forecast</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="cityName"
            type="text"
            placeholder="Please enter your city name"
            name="city"
            required
          />
          <input
            id="submitBTN"
            type="submit"
            value="Submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
      <div className="result">
        <p>City:{"/"} </p>
        <p>Temperature:{"/"} </p>
        <p>Feels like:{"/"} </p>
        <p>Wind Speed:{"/"} </p>
        <p>Clouds:{"/"} </p>
      </div>
    </div>
  );
}
export default App;
