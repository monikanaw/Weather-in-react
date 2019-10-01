import React from 'react';
import PropTypes from 'prop-types';
import './Weather.css';

const Weather = (props) => {

    function toCelsius(kelvin) {
     return Math.round(kelvin - 273);
    }

    let celsius = toCelsius(props.temperature);


    return(
      <div className="weather">
       { props.city && <p>City: { props.city }</p>}
       { props.country && <p>Country: { props.country }</p>}
       { props.temperature && <p>Temperature: {celsius}°C </p>}
       { props.description && <p>Description: { props.description }</p>}
       { props.humidity && <p>Humidity: { props.humidity }% </p>}
       { props.icon && <p className="icon"> <img      src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
         alt="icon" /></p>}
       { props.error && <p>{props.error} </p>}
      </div>
    );
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
