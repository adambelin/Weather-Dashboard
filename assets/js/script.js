
function tempConversion(temp) {
    return Math.floor((temp - 273.15) * 9/5 + 32 );
}

function populateDate(response) {

    let temp = tempConversion(response.current.temp);
    for (let i = 0; i < 5; i++) {
        let day = response.daily[i]

        let date = new Date(day.dt).toDateString();

        console.log(date)
    }
}

function getWeather () {

    let searchText = $("#search").val();
    console.log(searchText);

    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchText + "&appid=b1ceae313f004765b6fc393e0cc38135";

    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + searchText + "&limit=2&appid=b1ceae313f004765b6fc393e0cc38135")

        .then(response => response.json())
        .then(function (response) {

            let long = response[0].lon 
            let lat = response[0].lat

            fetch("http://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=b1ceae313f004765b6fc393e0cc38135")
                .then(response => response.json())
                .then(function (response) {

            populateDate(response);
         })
    })     
}; 

$(document).ready(function () {

    $("#searchBtn").on("click", getWeather);
    $("#search").keypress(function(event) {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode === 13) {
            getWeather();
            $("#search").val("");
        }
    })
});
