

var now = moment().format('l');
console.log(now);


var locationSearch = $("#searchArea");
var input = $("#locationInput");
var convertedInput = input[0];

locationSearch[0].addEventListener('submit', pullInfo);


// retrieve user input and convert to variables
//==================================================================================================

function pullInfo() {
event.preventDefault();
var city = convertedInput.value;
var weatherKey = "c9239d30890d94c9395849f44723296c";
var currWeatherURl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;
var history = [];

console.log(currWeatherURl);


// Use input to run ajax call to APIs
//=======================================================================================================

$.ajax({
    url:currWeatherURl,
    method: "GET"
}).then(function(response){
    console.log(response)

  // this pulls the latitude and longitude from the first api call to call the second api
    var lat = response.coord.lat;
    console.log(lat);
    var lon = response.coord.lon;
    console.log(lon);

  var fullWeatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + weatherKey;
  console.log(fullWeatherURL);

    $.ajax({
        url: fullWeatherURL,
        method: "GET"
    }) .then(function(fullresponse){

       console.log(fullresponse);

// Break down API Object into useable fields

           // current Temprature
       var temp = fullresponse.current.temp
       var curTemp = document.createElement("p");
       curTemp.innerHTML = "Temperature:" + " " + temp;

            // current Humidity
       var humi = fullresponse.current.humidity;
       var curHumi = document.createElement("p");
       curHumi.innerHTML = "Humidity:" + " " + humi;

            // current Windspeed
        var windS = fullresponse.current.wind_speed;
        var curWindS = document.createElement("p");
        curWindS.innerHTML = "Wind Speed:" + " " + windS;

            // current UV index
        var uv = fullresponse.current.uvi;
        var curUV = document.createElement("p");
        curUV.innerHTML = "UV Index:" + " " + uv;
            

        // day 1 forcast
        var day1Weather = fullresponse.daily[0].weather[0].icon;
        var d1URL = "http://openweathermap.org/img/w/" + day1Weather + ".png"
        var day1W = document.createElement("img");
        day1W.src = d1URL;

        var d1temp = fullresponse.daily[0].temp.day;
        console.log(d1temp)
        var d1TemDis = document.createElement("p");
        d1TemDis.innerHTML = "Temp:" + " " + d1temp ;

      displayInfo();



// Create html and display data on page
function displayInfo(){
    var cityEl = document.getElementById("cityName");
    cityEl.innerHTML = city + "   " + now;

    var display = document.getElementById("display"); 
    display.append(curTemp);
    display.append(curHumi);
    display.append(curWindS);
    display.append(curUV);

    var displayD1 = document.getElementById("forcast1");
    displayD1.append(day1W);
    displayD1.append(d1TemDis);
};

    })


})








}


