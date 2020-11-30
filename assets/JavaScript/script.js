

var now = moment().format('l');

var input01;

var locationSearch = $("#searchArea");
pullInfo("");

// locationSearch[0].addEventListener('submit', clearInfo);
locationSearch[0].addEventListener('submit', PrepairInfo);

function clearInfo() {
    // var fullDisplay = document.getElementById("fullDisplay");
     var fullDisplay = $("#fullDisplay");
    fullDisplay.empty();
    var SearchHist = $("#searchHistory");
    SearchHist.empty();
}

function PrepairInfo() {
var input01 = document.getElementById("locationInput").value;



pullInfo(input01);
}


// retrieve user input and convert to variables
//==================================================================================================

function pullInfo(city) {
// Event.preventDefault();
var history = [];
history = JSON.parse(localStorage.getItem("History:"));





if ( city.length == 0){
    i = history.length - 1;
    city = history[i];
    console.log(city);
}


var weatherKey = "c9239d30890d94c9395849f44723296c";
var currWeatherURl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;


// ====== saves searches to history  ========
 var x = history.length - 1;
 var lastSearch = history[x];
 console.log(lastSearch);

if (city == lastSearch){

} else {
   history.push(city);
   localStorage.setItem("History:", JSON.stringify(history));
}




//========== pulls history to create search history tabs=======

for (var i = history.length - 1; i > history.length - 6; i--){
    
    var histButton = document.createElement("Div");
    var histButtonTxt = document.createElement("p");
    histButtonTxt.innerHTML = history[i];
    histButton.append(histButtonTxt);
    var displayHist = document.getElementById("searchHistory");
    displayHist.append(histButton);
    histButton.classList.add("HistoryButtons");
    histButton.id = history[i];
}  


// Use input to run ajax call to APIs
//=======================================================================================================

$.ajax({
    url:currWeatherURl,
    method: "GET"
}).then(function(response){
    

  // this pulls the latitude and longitude from the first api call to call the second api
    var lat = response.coord.lat;
  
    var lon = response.coord.lon;
    

  var fullWeatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + weatherKey;


    $.ajax({
        url: fullWeatherURL,
        method: "GET"
    }) .then(function(fullresponse){

       

// Break down API Object into useable fields

           // current Weather
        var weaNow = fullresponse.current.weather[0].icon;
        var nowURL = "http://openweathermap.org/img/w/" + weaNow + ".png";

           // current Temprature
       var temp = fullresponse.current.temp
       var curTemp = document.createElement("p");
       curTemp.innerHTML = "Temperature:" + " " + temp;

            // current Humidity
       var humi = fullresponse.current.humidity;
       var curHumi = document.createElement("p");
       curHumi.innerHTML = "Humidity:" + " " + humi + "%";

            // current Windspeed
        var windS = fullresponse.current.wind_speed;
        var curWindS = document.createElement("p");
        curWindS.innerHTML = "Wind Speed:" + " " + windS + " " + "MPH";

            // current UV index
        var uv = fullresponse.current.uvi;
        var curUV = document.createElement("p");
        curUV.innerHTML = "UV Index:" + " " + uv;
            if (uv <= 3) {
                curUV.classList.add("favorable");
            }

            if (3 < uv && uv < 6) {
                curUV.classList.add("moderate");
            }

            if ( uv >= 6) {
                curUV.classList.add("severe");
            }


        // day 1 forcast
        var d1Day = moment().add(1, 'd').format('MM/DD/YYYY');
        var d1date = document.createElement("p");
        d1date.innerHTML = d1Day;

        var day1Weather = fullresponse.daily[0].weather[0].icon;
        var d1URL = "http://openweathermap.org/img/w/" + day1Weather + ".png"
        var day1W = document.createElement("img");
        day1W.src = d1URL;

        var d1temp = fullresponse.daily[0].temp.day;
      
        var d1TemDis = document.createElement("p");
        d1TemDis.innerHTML = "Temp:" + " " + d1temp ;

        var d1Humi = fullresponse.daily[0].humidity;
        var d1Humidity = document.createElement("p");
        d1Humidity.innerHTML = "Humidity:" + " " + d1Humi + "%";


         // day 2 forcast
         var d2Day = moment().add(2, 'd').format('MM/DD/YYYY');
         var d2date = document.createElement("p");
         d2date.innerHTML = d2Day;
 
         var day2Weather = fullresponse.daily[1].weather[0].icon;
         var d2URL = "http://openweathermap.org/img/w/" + day2Weather + ".png"
         var day2W = document.createElement("img");
         day2W.src = d2URL;
 
         var d2temp = fullresponse.daily[1].temp.day;
         var d2TemDis = document.createElement("p");
         d2TemDis.innerHTML = "Temp:" + " " + d2temp ;
 
         var d2Humi = fullresponse.daily[1].humidity;
         var d2Humidity = document.createElement("p");
         d2Humidity.innerHTML = "Humidity:" + " " + d2Humi + "%";


          // day 3 forcast
          var d3Day = moment().add(3, 'd').format('MM/DD/YYYY');
          var d3date = document.createElement("p");
          d3date.innerHTML = d3Day;
  
          var day3Weather = fullresponse.daily[2].weather[0].icon;
          var d3URL = "http://openweathermap.org/img/w/" + day3Weather + ".png"
          var day3W = document.createElement("img");
          day3W.src = d3URL;
  
          var d3temp = fullresponse.daily[2].temp.day;
          var d3TemDis = document.createElement("p");
          d3TemDis.innerHTML = "Temp:" + " " + d3temp ;
  
          var d3Humi = fullresponse.daily[2].humidity;
          var d3Humidity = document.createElement("p");
          d3Humidity.innerHTML = "Humidity:" + " " + d3Humi + "%";



           // day 4 forcast
           var d4Day = moment().add(4, 'd').format('MM/DD/YYYY');
           var d4date = document.createElement("p");
           d4date.innerHTML = d4Day;
   
           var day4Weather = fullresponse.daily[3].weather[0].icon;
           var d4URL = "http://openweathermap.org/img/w/" + day4Weather + ".png"
           var day4W = document.createElement("img");
           day4W.src = d4URL;
   
           var d4temp = fullresponse.daily[3].temp.day;
           var d4TemDis = document.createElement("p");
           d4TemDis.innerHTML = "Temp:" + " " + d4temp ;
   
           var d4Humi = fullresponse.daily[3].humidity;
           var d4Humidity = document.createElement("p");
           d4Humidity.innerHTML = "Humidity:" + " " + d4Humi + "%";
 


             // day 5 forcast
             var d5Day = moment().add(5, 'd').format('MM/DD/YYYY');
             var d5date = document.createElement("p");
             d5date.innerHTML = d5Day;
     
             var day5Weather = fullresponse.daily[4].weather[0].icon;
             var d5URL = "http://openweathermap.org/img/w/" + day5Weather + ".png"
             var day5W = document.createElement("img");
             day5W.src = d5URL;
     
             var d5temp = fullresponse.daily[4].temp.day;
             var d5TemDis = document.createElement("p");
             d5TemDis.innerHTML = "Temp:" + " " + d5temp ;
     
             var d5Humi = fullresponse.daily[4].humidity;
             var d5Humidity = document.createElement("p");
             d5Humidity.innerHTML = "Humidity:" + " " + d5Humi + "%";
   

      displayInfo(city);



// Create html and display data on page
function displayInfo(city){
    var cityEl = document.createElement("h2")
    var disp = document.getElementById("display");
    disp.prepend(cityEl);
    console.log(cityEl);
    cityEl.innerHTML = city + "   " + now;

    var weatherNow = document.getElementById("currentWeather");
    weatherNow.src = nowURL;


    var display = document.getElementById("display"); 
    display.append(curTemp);
    display.append(curHumi);
    display.append(curWindS);
    display.append(curUV);
    display.classList.add("display");

    var forcast = document.getElementById("lowerMain");
    var forcastHeader = document.createElement("h3");
    forcastHeader.innerHTML = "5-Day Forcast";
    forcast.prepend(forcastHeader);

    var displayD1 = document.getElementById("forcast1");
    displayD1.append(d1date);
    displayD1.append(day1W);
    displayD1.append(d1TemDis);
    displayD1.append(d1Humidity);

    var displayD2 = document.getElementById("forcast2");
    displayD2.append(d2date);
    displayD2.append(day2W);
    displayD2.append(d2TemDis);
    displayD2.append(d2Humidity);

    var displayD3 = document.getElementById("forcast3");
    displayD3.append(d3date);
    displayD3.append(day3W);
    displayD3.append(d3TemDis);
    displayD3.append(d3Humidity);

    var displayD4 = document.getElementById("forcast4");
    displayD4.append(d4date);
    displayD4.append(day4W);
    displayD4.append(d4TemDis);
    displayD4.append(d4Humidity);

    var displayD5 = document.getElementById("forcast5");
    displayD5.append(d5date);
    displayD5.append(day5W);
    displayD5.append(d5TemDis);
    displayD5.append(d5Humidity);

    displayD1.classList.add("forcast");
    displayD2.classList.add("forcast");
    displayD3.classList.add("forcast");
    displayD4.classList.add("forcast");
    displayD5.classList.add("forcast");


            // This is a function that runs getInfo Function when a search history tab is clicked
    // ===================================================================================================
      

 
    $(".HistoryButtons").click(function() {
        var city =  event.target.id; 
           

            // var input02 = document.getElementById("locationInput");
            // input02.value= sh;
            
           
            location.reload();
            pullInfo(city);

    });


};

    })


})








}


