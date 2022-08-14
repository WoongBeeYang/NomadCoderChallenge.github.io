const API_KEY = "f14146e84c7781c495573c93fc35ff96"

function locationOk(positon){
  const lat = positon.coords.latitude;
  const lng = positon.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  })

}

function loactionErr(){
  alert("i can't find your location")
}
navigator.geolocation.getCurrentPosition(locationOk, loactionErr);