import React from 'react';
import PropTypes from 'prop-types';
import './Weather.css';

class Weather extends React.Component {

  render(){
    function toCelsius(kelvin) {
     return Math.round(kelvin - 273);
    }

    let celsius = toCelsius(this.props.temperature);

    return(
      <div className="weather">
       { this.props.city && <p>City: { this.props.city }</p>}
       { this.props.country && <p>Country: { this.props.country }</p>}
       { this.props.temperature && <p>Temperature: {celsius}°C </p>}
       { this.props.description && <p>Description: { this.props.description }</p>}
       { this.props.humidity && <p>Humidity: { this.props.humidity }% </p>}
       { this.props.icon && <p className="icon"> <img      src={`http://openweathermap.org/img/w/${this.props.icon}.png`}
         alt="wthr img" /></p>}
       { this.props.error && <p>{this.props.error} </p>}
      </div>
    );
  };
}

Weather.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.number,
  description: PropTypes.string,
  humidity: PropTypes.number,
  icon: PropTypes.string,
  error: PropTypes.string,
};

export default Weather;
