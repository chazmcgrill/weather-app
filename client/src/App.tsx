import * as React from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Header from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';
import { IWeather } from './interfaces';
 
const DEV_API = 'http://localhost:4000/api/weather';
// const PROD_API = 'https://vast-brushlands-88355.herokuapp.com/api/weather';

interface IState {
  weather: IWeather
  selectedWeather: IWeather | boolean,
  locationText: string,
  location: {
    addressLabel: string,
    geometry: {
      lat: number,
      lng: number,
    }
  },
  isLoading: boolean,
  temperature: string,
}

export default class App extends React.Component<{}, IState> {
  public state: IState = {
    weather: {},
    selectedWeather: false,
    locationText: '',
    isLoading: true,
    location: {
      addressLabel: 'Leeds UK',
      geometry: {
        lat: 53.8007554,
        lng: -1.5490774
      }
    },
    temperature: 'Celcius'
  }

  public componentDidMount() {
    this.fetchWeatherData();
  }

  public handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const locationText = event.target.value;
    this.setState({ locationText });
  }

  public changeTemperature = () => {
    const temperature = this.state.temperature === 'Celcius' ? 'Farenheit' : 'Celcius';
    this.setState({ temperature });
  }

  public handleLocationSubmit = async () => {
    const locationData: any = await this.fetchLocation(this.state.locationText);
    const { formatted_address, geometry } = locationData.results[0];
    const location = {
      addressLabel: formatted_address,
      geometry: geometry.location
    }
    await this.setState({ location });
    this.fetchWeatherData();
  }

  public async fetchWeatherData() {
    const { lat, lng } = this.state.location.geometry;
    const latlng = `${lat},${lng}`;
    const weather: IWeather = await this.api(`${DEV_API}/${latlng}`);
    this.setState({ weather, isLoading: false });
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
    const selectedWeather = this.state.weather.hourly!.data[idx]
    this.setState({ selectedWeather });
  }

  public render() {
    return (
      <React.Fragment>
        <Header changeTemperature={this.changeTemperature} temperature={this.state.temperature} />
        <WeatherDisplay
          location={this.state.location}
          weather={this.state.weather}
          currentWeather={this.state.selectedWeather}
          handleTextChange={this.handleTextChange}
          locationText={this.state.locationText}
          handleLocationSubmit={this.handleLocationSubmit}
          isLoading={this.state.isLoading}
          temperature={this.state.temperature}
        />
        <Forecast weather={this.state.weather} handleForecastClick={this.handleForecastClick} temperature={this.state.temperature} />
      </React.Fragment>
    );
  }
}
