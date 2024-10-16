function displayCurrentTemperature(response) {
  let temperatureElement = Math.round(response.data.temperature.current);

  let currentTemperature = document.querySelector(
    "#current-temperature-number"
  );
  let cityElement = document.querySelector("#current-city");

  currentTemperature.innerHTML = temperatureElement;
  cityElement.innerHTML = response.data.city;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#city-search-bar");
  let city = searchInputElement.value;

  let apiKey = "475c1b09tc9cf784eac1636c9abbbco2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayCurrentTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-info");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
