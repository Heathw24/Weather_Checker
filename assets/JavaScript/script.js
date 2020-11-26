




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

displayInfo();
})



function displayInfo(){
    var dateEl = document.getElementById("date");
    dateEl.innerHTML = now;
    var cityEl = document.getElementById("cityName");
    console.log(cityEl);
    console.log(city);
    cityEl.innerHTML = city;
}

}
// Break down API Object into useable fields

// Create html and display data on page