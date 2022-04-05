// QuerySelectors
let button = document.querySelector('#button');
let dogImg = document.querySelector('#image');
let button2 = document.querySelector('#button2');
let input = document.querySelector('#input')

let temperature = document.querySelector('#temperature');
let wind = document.querySelector('#wind');
let description = document.querySelector('#description');


// Event Listeners
button.addEventListener('click', function(){
    console.log("working click");
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (httpResponse){
        return httpResponse.json();
    })
    .then(function (data) {
       newImg = dogImg.src = data.message;
    })
})

button2.addEventListener('click', function(){

    let city = input.value;

    let cityWeather = (`https://goweather.herokuapp.com/weather/${city}`);
    // let cityWeather = ("https://goweather.herokuapp.com/weather/" + city);

    fetch(cityWeather)
    .then(function (httpResponse){
        return httpResponse.json();
    })
    .then(function (data) {
        // temperature.innerHTML = "Current temperature: " + data.temperature;
        temperature.innerHTML = `Current temperature: ${data.temperature}`;
        // wind.innerHTML = "Current wind speed: " + data.wind;
        wind.innerHTML = `Current wind speed: ${data.wind}`;
        // description.innerHTML = data.description;
        description.innerHTML = `Description: ${data.description}`;
    })
})