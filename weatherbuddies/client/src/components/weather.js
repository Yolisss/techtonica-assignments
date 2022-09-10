import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const loadData = () => {
    fetch("http://localhost:8088/api/weather") //fetching from backend
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  if (weatherData === null) {
    return <div>Loading..</div>;
  } else {
    return (
      <div>
        <h1>hello from the weather buddies in the weather components</h1>
        <p>Latitude: {weatherData.coord.lat}</p>
        <p>Longitude: {weatherData.coord.lon}</p>
      </div>
    );
  }
};

export default Weather;
