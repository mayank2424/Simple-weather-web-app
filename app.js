$(document).ready(function () {
  var lat, lon, calling_url;
  
  if ("geolocation" in navigator) {
    
    $('#showWeather').on('click', function () {
       navigator.geolocation.getCurrentPosition(gotLocation);

      function gotLocation(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        
        calling_url = 'https://api.openweathermap.org/data/2.5/weather?lat=' +
                  lat + '&lon=' + 
                  lon + '&units=metric&APPID=c163216a9c6c34e2df6f68b68ca79aed';
        
        $.ajax({
          url : calling_url,
          method : 'GET',
          success : function (data) {
            


            var temp = data.main.temp;
            var location = data.name;
            var desc = data.weather.description;
            var pressure= data.main.pressure;
            var humidity= data.main.humidity;
            var wind= data.wind.speed;

            $('#temp').text(" Temperature is : " + "  " + temp + '   °').css("color","red")
            $('#location').text("  Location is :  " +"  " + location)
            $("#humidity").text(" Humidity is : " + " "+  humidity).css("color","orange")
            $('#pressure').text(" Pressure is : " + " " +  pressure).css("color" ,"orange")
            $("#speed").text(" Wind Speed is :" + " " +  wind).css("color", "blue")


          }
        });
     }
    });
    
  } else {
    alert('error');
  }
  
});
