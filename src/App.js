import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';
import WithClass from './hoc/WithClass';
import './App.css';
import axios from 'axios';


class App extends React.Component {

  state ={
    weather: undefined,
    error: undefined
  }

getWeather = (event) => {
  event.preventDefault();
  const city = event.target.city.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ea00d73a83a2dc576cf68ab20a5f063`;
  axios.get(url)
  .then(response => {
    const newState = Object.assign({}, this.state, {weather: [response.data], error: false});
    this.setState(newState)
  })
  .catch(error =>{
     if(error.response.status === 404){
         const newState = Object.assign({}, this.state, {weather: undefined, error: "We don't have your city, please try again"});
         this.setState(newState)
     } else if(error.response.status === 400) {
         const newState = Object.assign({}, this.state, {weather: undefined, error: "Please input name of your city"});
         this.setState(newState)
       }
    })
};


  render(){
   let weather = null;

   if(!this.state.error && this.state.weather){
      weather =
         this.state.weather.map(weather => {
          return <Weather
          key={weather.id}
          city={weather.name}
          country={weather.sys.country}
          temperature={weather.main.temp}
          description={weather.weather[0].description}
          humidity={weather.main.humidity}
          icon={weather.weather[0].icon}/>
       });
      }
      else{
       weather = <Weather
          error= {this.state.error}
           />
      }

   return(
      <WithClass classes={"App"}>
       <Titles />
       <div className="weather-table">
         <Form getWeather={this.getWeather} />
          {weather}
        </div>
      </WithClass>
    );
  }
}

export default App;
