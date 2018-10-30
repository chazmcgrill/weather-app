import * as React from 'react';
import './WeatherDisplay.css';

interface IWeatherDisplayProps {
    data: any;
}

export default (props: IWeatherDisplayProps) => {
    if (Object.keys(props.data).length === 0) {
        return <div>Loading...</div>;
    }

    const weather = props.data.weather[0];
    
    return <div className="weather-display">
        <h1>{props.data.name}</h1>
        <h2>{`${Math.floor(props.data.main.temp)}°C`}</h2>
        <img src={weather.icon} alt={weather.main} />
        <h3>{weather.main}</h3>
        <p>{weather.description}</p>
      </div>;
};

