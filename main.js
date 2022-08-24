const fLike = document.getElementById("feels_like");
const humid = document.getElementById("humidity");
const press = document.getElementById("pressure");
const temp = document.getElementById("temp");
const tempMax = document.getElementById("temp_max");
const tempMin = document.getElementById("temp_min");

//1.
const input = document.getElementById("city");
const locat = input.value;
document.getElementById("first").addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();
    console.log(input.value);    
});



//2.
async function getWeather(){

    const loc = document.getElementById("city").value;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + loc + '&appid=2c53047c6073f2d3c04199e57374e18f&units=metric';
    //api s data irehiig huleene
    const response = await fetch(
        url,{mode: 'cors'});

    //irsen data g json bolohig huleene
    const weatherData = await response.json();

    fLike.innerHTML = weatherData.main.feels_like + " °C";
    humid.innerHTML = weatherData.main.humidity;
    press.innerHTML = weatherData.main.pressure;
    temp.innerHTML = weatherData.main.temp + " °C";; 
    tempMax.innerHTML = weatherData.main.temp_max + " °C";;
    tempMin.innerHTML = weatherData.main.temp_min + " °C";;

    console.log(weatherData.main);
};

//3.

const submitB = document.getElementById("submit");
submitB.addEventListener("click", getWeather);
