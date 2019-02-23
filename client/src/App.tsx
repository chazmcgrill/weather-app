import * as React from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Header from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';

interface IState {
  weather: any
  selectedWeather: {}
}

export default class App extends React.Component<{}, IState> {
  public state: IState = {
    weather: {},
    selectedWeather: {},
  }

  public componentDidMount() {
    this.fetchWeatherData();
  }

  public async fetchWeatherData() {
    const weather: any = await this.api('https://vast-brushlands-88355.herokuapp.com/api/weather');
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

  handleForecastClick = (idx: number) => {
    const selectedWeather = this.state.weather.hourly.data[idx]
    this.setState({ selectedWeather });
  }

  public render() {
    return (
      <React.Fragment>
        <Header />
        <WeatherDisplay weather={this.state.weather} currentWeather={this.state.selectedWeather} />
        <Forecast weather={this.state.weather} handleForecastClick={this.handleForecastClick} />
      </React.Fragment>
    );
  }
}
