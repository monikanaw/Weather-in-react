import React from 'react';
import PropTypes from 'prop-types';

class Weather extends React.Component {

  render(){
    function toCelsius(kelvin) {
     return Math.round(kelvin - 273);
    }

    let celsius = toCelsius(this.props.temperature);

    return(
      <div>
       { this.props.city && <p>City: { this.props.city }</p>}
       { this.props.country && <p>Country: { this.props.country }</p>}
       { this.props.temperature && <p>Temperature: {celsius}°C </p>}
       { this.props.description && <p>Description: { this.props.description }</p>}
       { this.props.humidity && <p>Humidity: { this.props.humidity }% </p>}
       { this.props.icon && <div> { this.props.icon }</div>}
       { this.props.error && <p>{this.props.error} </p>}
      </div>
    );
  };
}

Weather.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
};

export default Weather;
