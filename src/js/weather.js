/*
  Weather
*/
const weatherImage = document.querySelector("#weather-box img");
const city = document.querySelector("#weather-box div:nth-child(3)");
const weather = document.querySelector("#weather-box div:nth-child(4)");
const API_KEY = "2f7041850e54d4ce1c574125c7e261db";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherImage.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description} / ${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("날씨 정보 습득에 실패했습니다.\n서울의 날씨를 표시합니다.");
  // Default position
  // Blue House
  const position = {
    coords: {
      latitude: 37.586594,
      longitude: 126.974803,
    },
  };
  onGeoOk(position);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError, {
  timeout: 3000,
});
