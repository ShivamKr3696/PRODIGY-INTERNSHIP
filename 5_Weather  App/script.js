const apiKey = "262cf9631cdbf6d0598242fb888679c0";

function getWeather() {
  const city = document.getElementById("city").value.trim();
  const resultDiv = document.getElementById("weather-result");

  if (city === "") {
    resultDiv.innerHTML = "⚠️ Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const weatherType = data.weather[0].main;
      const emoji = getWeatherEmoji(weatherType);
      const html = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>${emoji} ${weatherType}</p>
        <p>🌡️ Temperature: <strong>${data.main.temp}°C</strong></p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      `;
      resultDiv.innerHTML = html;
    })
    .catch((err) => {
      resultDiv.innerHTML = `❌ ${err.message}`;
    });
}

function getWeatherEmoji(type) {
  switch(type.toLowerCase()) {
    case "clouds": return "☁️";
    case "clear": return "☀️";
    case "rain": return "🌧️";
    case "drizzle": return "🌦️";
    case "thunderstorm": return "⛈️";
    case "snow": return "❄️";
    case "mist":
    case "haze":
    case "fog": return "🌫️";
    default: return "🌈";
  }
}
/* Created By Shivam Kumar...   */