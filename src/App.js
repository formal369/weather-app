import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. As soon as the app is launched, the weather in the current location is visible.
// 2. Weather information includes cities, Celsius, Fahrenheit, and weather conditions.
// 3. There are five buttons (one in the current location, four in different cities)
// 4. Whenever click the city button, the city's weather is visible.
// 5. When press the current location button, the current location-based weather is visible.
// 6. The loading spinner rotates while bringing the data.

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)
    })
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ee9f78569dc69b9f6ed6ddc0fb389220`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
  }
  
  useEffect(() => {
    getCurrentLocation();
  }, [])

  return (
    <div>
      <div class="container">
        <WeatherBox />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
