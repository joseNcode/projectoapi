let clima= document.querySelector(".clima").innerHTML;
console.log(clima)
let descripcion= document.querySelector(".descripcion").innerHTML;
console.log(descripcion)
let temperatura= document.querySelector(".temperatura").innerHTML;
console.log(temperatura)
let sensaciontermica= document.querySelector(".sensaciontermica").innerHTML;
console.log(sensaciontermica)
let temperaturaviento= document.querySelector(".temperaturaviento").innerHTML;
console.log(temperaturaviento)
let sensaciontermica2= document.querySelector(".sensaciontermica").innerHTML;
console.log(sensaciontermica2)
let latitud= document.querySelector(".latitud").innerHTML;
console.log(latitud)
let longitud= document.querySelector(".longitud").innerHTML;
console.log(longitud)


fetch("https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric")

.then(response => response.json())

.then(data => {

console.log(data);

let climaR = data.weather[0].main;
document.querySelector(".clima").innerHTML = "Clima:  "+ climaR
console.log(climaR);

let descripcionR= data.weather[0].description;
document.querySelector(".descripcion").innerHTML = "descripcion:  " + descripcionR
console.log(descripcionR)


let temperaturaR = data.main.temp;
document.querySelector(".temperatura").innerHTML = "Temperatura:     "+temperaturaR
console.log(temperaturaR);

let sensaciontermicaR= data.weather[0].description
document.querySelector(".sensaciontermica").innerHTML= "Sensacion Termica:      "  + sensaciontermicaR
console.log(sensaciontermicaR)

let temperaturavientoR= data.wind.speed;
document.querySelector(".temperaturaviento").innerHTML= "Temperatura del viento:  "+ temperaturavientoR
console.log(temperaturavientoR)

let sensaciontermica2R= data.weather[0].description;
document.querySelector(".sensaciontermica").innerHTML= "Sensacion Termica:   "+ sensaciontermicaR
console.log(sensaciontermica2R)

let latitudR = data.coord.lat;
document.querySelector(".latitud").innerHTML="Latitud:    "+ latitudR
console.log (latitudR);

let longitudR= data.coord.lon;
document.querySelector(".longitud").innerHTML= "Longitud:     "+ longitudR
console.log(longitudR)



})



