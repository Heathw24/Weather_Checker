
// retrieve user input and convert to variables



var locationSearch = $("#searchArea");
var input = $("#locationInput");
var convertedInput = input[0];

locationSearch[0].addEventListener('submit', pullInfo);

function pullInfo() {
event.preventDefault();
var city = convertedInput.value;
var weatherKey = "c9239d30890d94c9395849f44723296c";
var currWeatherURl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;
var history = [];

console.log(currWeatherURl);

$.ajax({
    url:currWeatherURl,
    method: "GET"
}).then(function(response){
    console.log(response)
})

}

// Break down API Object into useable fields

// Create html and display data on page