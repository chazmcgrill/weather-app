import * as React from 'react';
import axios from 'axios';
import './App.css';
import Forecast from './components/Forecast';
import Header from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';

const DEV_API = 'http://localhost:4000/api/weather';
// const PROD_API = 'https://vast-brushlands-88355.herokuapp.com/api/weather';

interface IState {
  weather: any,
  selectedWeather: {},
  locationText: string,
  location: any
}

export default class App extends React.Component<{}, IState> {
  public state: IState = {
    weather: {},
    selectedWeather: {},
    locationText: '',
    location: null,
  }

  public componentDidMount() {
    this.fetchWeatherData();
  }

  public handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const locationText = event.target.value;
    this.setState({ locationText });
  }

  public handleLocationSubmit = async () => {
    const locationData: any = await this.fetchLocation(this.state.locationText);
    const { formatted_address, geometry } = locationData.results[0];
    const location: any = {
      addressLabel: formatted_address,
      geometry: geometry.location
    }
    this.setState({ location });
  }

  public async fetchWeatherData() {
    const weather: any = await this.api(DEV_API);
    const selectedWeather = weather.daily.data[0];
    this.setState({ weather, selectedWeather });
  }
  
  public api<T>(url: string): Promise<T> { 
    return fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        return data;
      });
  }

  public fetchLocation<U>(location: string): Promise<U> {
    return fetch(`http://localhost:4000/api/location/${location}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(data => {
        return data
      });
  }

  handleForecastClick = (idx: number) => {
    const selectedWeather = this.state.weather.hourly.data[idx]
    this.setState({ selectedWeather });
  }

  public render() {
    return (
      <React.Fragment>
        <Header />
        <WeatherDisplay weather={this.state.weather} currentWeather={this.state.selectedWeather} handleTextChange={this.handleTextChange} locationText={this.state.locationText} handleLocationSubmit={this.handleLocationSubmit} />
        <Forecast weather={this.state.weather} handleForecastClick={this.handleForecastClick} />
      </React.Fragment>
    );
  }
}
