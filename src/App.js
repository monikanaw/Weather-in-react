import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';

class App extends React.Component {

  state ={
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    humidity: undefined,
    error: undefined,
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    const country = event.target.country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=7ea00d73a83a2dc576cf68ab20a5f063`);
    const data = await api.json();

    if( city && country) {
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        error: ""
      })
    } else {
      this.setState({
      city: undefined,
      country: undefined,
      temperature: undefined,
      description: undefined,
      humidity: undefined,
      error: "Please input your city"
      })   
    }
  }


  render(){
    return(
      <div>
       <Titles />
       <Form getWeather={this.getWeather} />
       <Weather
         city={this.state.city}
         country={this.state.country}
         temperature={this.state.temperature}
         description={this.state.description}
         humidity={this.state.humidity}
         error={this.state.error}
       />
      </div>

    );
  }
}

export default App;
