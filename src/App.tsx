import * as React from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Header from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <WeatherDisplay />
        <Forecast />
      </React.Fragment>
    );
  }
}
