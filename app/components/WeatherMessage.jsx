var React = require('react');

var WeatherMessage = ({ temp, location }) => {
    return (
      <div>
        <h3>Temp in {location} is {temp} F</h3>
      </div>
    );
};

module.exports = WeatherMessage;
