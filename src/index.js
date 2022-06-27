import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    console.log("click");
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();
    
    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Fahrenheit is ${(((((response.main.temp)-273.15)*9/5)+32)).toFixed(0)} degrees.`);
      $('.showWindSpeed').text(`The wind speed is ${response.wind.speed} meter/sec.`);
      $('.showSkies').text(`The skies are ${((response.weather[0].main).toLowerCase())} today.`);
      $('.showVisibilty').text(`The visibility today shows ${response.visibility} meters.`);
    }
  });

  $('#weatherZipCode').click(function() {
    const zipCode = $('zipCode').val();
    $('#zipCode').val("");
    const countryCode = $('select#countries option:selected').val();
    // var value = $('select#dropDownId option:selected').val();
    let request = new XMLHttpRequest();
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip Code},${countryCode}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();
    
    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Fahrenheit is ${(((((response.main.temp)-273.15)*9/5)+32)).toFixed(0)} degrees.`);
      $('.showWindSpeed').text(`The wind speed is ${response.wind.speed} meter/sec.`);
      $('.showSkies').text(`The skies are ${((response.weather[0].main).toLowerCase())} today.`);
      $('.showVisibilty').text(`The visibility today shows ${response.visibility} meters.`);
    }
  });
});

// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
