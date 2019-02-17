import * as React from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Header from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';

interface IState {
  weather: {}
}

export default class App extends React.Component<{}, IState> {
  public state: IState = {
    weather: {}
  }

  public componentDidMount() {
    this.callApi();
  }

  public async callApi() {
    const weather = await this.api('http://localhost:4001/api/weather');
    this.setState({ weather });
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

  public render() {
    return (
      <React.Fragment>
        <Header />
        <WeatherDisplay weather={this.state.weather}/>
        <Forecast weather={this.state.weather} />
      </React.Fragment>
    );
  }
}
