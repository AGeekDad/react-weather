var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    console.log("handleSearch: " + location);
    var that = this;
    that.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function(data){
      that.setState({
        isLoading: false,
        location: data.location,
        temp: data.temp
      });
    }, function(errMessage){
      that.setState({
        isLoading: false,
        location: '',
        temp: ''
      });
      alert(errMessage);
    })
  },
  render: function() {
    var { temp, location, isLoading } = this.state;

    function renderMessage(){
      if(isLoading){
        return <div className='loading'>Loading...</div>
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location} />
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
