var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(data){
      that.setState({
        isLoading: false,
        location: data.location,
        temp: data.temp
      });
    }, function(e){
      that.setState({
        isLoading: false,
        location: '',
        temp: '',
        errorMessage: e.message
      });
    })
  },
  render: function() {
    var { temp, location, isLoading, errorMessage } = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Loading weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location} />
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
