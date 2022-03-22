function tempConversion(temp) {
    return (temp - 273.15) * 9/5 + 32 
}

function getWeather () {

    let searchText = $("#search").val();
    console.log(searchText);

    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchText + "&appid=b1ceae313f004765b6fc393e0cc38135";
        
    fetch(apiUrl)
    .then(response => response.json())
    .then(function (response) {
      
        let temp = tempConversion(response.main.temp);

       console.log(response.main)
       console.log(temp);
    })
}; 

$(document).ready(function () {

    $("#searchBtn").on("click", getWeather);

});
