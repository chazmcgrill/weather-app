import * as React from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Header from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';

interface IState {
  data: {}
}

export default class App extends React.Component<{}, IState> {
  public state: IState = {
    data: {}
  }

  public componentDidMount() {
    this.callApi();
  }

  public async callApi() {
    const data = await this.api(process.env.REACT_APP_TEST_API_URL || "");
    this.setState({ data });
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
    console.log(this.state.data)
    return (
      <React.Fragment>
        <Header />
        <WeatherDisplay data={this.state.data}/>
        <Forecast />
      </React.Fragment>
    );
  }
}
