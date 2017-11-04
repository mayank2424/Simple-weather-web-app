$(document).ready(function () {
  var lat, lon, api_url;
  
  if ("geolocation" in navigator) {
    
    $('#showWeather').on('click', function () {
       navigator.geolocation.getCurrentPosition(gotLocation);

      function gotLocation(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        
        api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
                  lat + '&lon=' + 
                  lon + '&units=metric&APPID=c163216a9c6c34e2df6f68b68ca79aed';
        
        $.ajax({
          url : api_url,
          method : 'GET',
          success : function (data) {
            


            var tempr = data.main.temp;
            var location = data.name;
            var desc = data.weather.description;
            var pressure= data.main.pressure;
            var humidity= data.main.humidity;
            var wind= data.wind.speed;

            $('#temp').text(" Temperature is : " + "  " + tempr + '   °');
            $('#location').text(" Location is :  " +"  " + location)
            $("#humidity").text(" Humidity is : " + " "+  humidity);
            $('#pressure').text(" Pressure is : " + " " +  pressure);
            $("#speed").text(" Wind Speed is :" + " " +  wind)


          }
        });
     }
    });
    
  } else {
    alert('Your browser doesnt support geolocation. Sorry.');
  }
  
});
