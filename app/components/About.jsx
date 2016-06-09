var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h3>About</h3>
//       </div>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
        <div>
          <h1 className="text-center">About</h1>
          <p>Example for The Complete React Web App Developer Course. <br/>https://fanatics.udemy.com/the-complete-react-web-app-developer-course</p>
          <ul>
            <li>
              <a href="http://openweathermap.org">Open Weather Map</a> - Weather API
            </li>
          </ul>
        </div>
    </div>
  );
}

module.exports = About;
