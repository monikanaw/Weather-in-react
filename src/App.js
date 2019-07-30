import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state ={
    weather:[],
    error: false
  }

getWeather = (event) => {
  event.preventDefault();
  const city = event.target.city.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ea00d73a83a2dc576cf68ab20a5f063`;
  axios.get(url)
  .then(response =>
    this.setState(prevState => {
      return {
        weather: [response.data],
        error: false
      }
    })
  )
  .catch(error =>{
     if(error.response.status === 404){
        console.log(`404`);
        this.setState(prevState => {
          return{
            weather:[],
            error: "We don't have your city, please try again"
          }
        })
     } else if(error.response.status === 400) {
       console.log('400');
       this.setState(prevState => {
         return{
           weather: [],
           error: "Please input name of your city"
         };
       })
     };
    })
};



  render(){

   let weather = null;

   if(!this.state.error){
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
      <div className="App">
       <Titles />
       <Form getWeather={this.getWeather} />
        {weather}
      </div>
    );
  }
}

export default App;
