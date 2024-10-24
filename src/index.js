function dayTime() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}
let today = document.querySelector("#daytime");
let now = new Date();

today.innerHTML = dayTime(now);

function currentCity(city) {
  let apiKey = "a9e857fe88f94odb09ad1fcdt90348f2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}
&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function searchButton(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let searchCity = document.querySelector("#search-input");
  h1.innerHTML = searchCity.value;
  currentCity(searchCity.value);
}
let cityButton = document.querySelector("form");
cityButton.addEventListener("submit", searchButton);

function displayWeather(response) {
  let displayTemperature = document.querySelector(".temperature");
  let temperature = Math.round(response.data.temperature.current);

  displayTemperature.innerHTML = temperature;
}
