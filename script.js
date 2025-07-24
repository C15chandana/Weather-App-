async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "8fef2c47c003d36f8a3db93648db1d1d"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8fef2c47c003d36f8a3db93648db1d1d&units=metric`;
    console.log("City name entered: " + city);
    console.log("Full URL: " + url);
    
    fetch(url)
      .then(response => {
        console.log("API Response Status: ", response.status);
        return response.json();
      })
      .then(data => {
        console.log("API Data:", data);
        // use data to update your app
      })
      .catch(error => {
        console.log("Error fetching data:", error);
        alert("City not found!");
      });
    const response = await fetch(url);
    if (!response.ok) {
      alert("City not found!");
      return;
    }
    const data = await response.json();
  
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temp").textContent = `${data.main.temp}°C`;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind").textContent = `${data.wind.speed} km/h`;
  
    const weatherIcon = document.getElementById("weatherIcon");
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
