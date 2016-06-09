var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h2>React Weather</h2>
        <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <IndexLink to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
        <IndexLink to="/examples" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
      </div>
    );
  }
});

module.exports = Nav;
