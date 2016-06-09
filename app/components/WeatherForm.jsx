var React = require('react');

var WeatherForm = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSearch}>
          <h3>WeatherForm</h3>
          <input type='text' ref='location'></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
