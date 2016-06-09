var axios = require('axios');

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=d58f17fe2697da5d0692c182b4897a10&units=imperial`;

module.exports = {
  getTemp: function(location){
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeURIComponent(location)}`;
      return axios.get(requestUrl).then(function(response){
        if(response.data.cod && response.data.message){
          throw new Error(response.data.message);
        } else {
          return { temp: response.data.main.temp, location: response.data.name };
        }
      }, function(response){
        throw new Error(response.data.message);
      });
  }
}
//$.ajax({url: `http://api.openweathermap.org/data/2.5/weather?q={location}&appid=d58f17fe2697da5d0692c182b4897a10&units=imperial`});
