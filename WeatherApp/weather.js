let inputButton = document.getElementById("inputButton");

function getData() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=36.0754&longitude=-79.0997&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,cloud_cover,visibility,temperature_80m,temperature_120m,temperature_180m&temperature_unit=fahrenheit&wind_speed_unit=mph"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

inputButton.addEventListener("click", () => {
  return getData();
});
