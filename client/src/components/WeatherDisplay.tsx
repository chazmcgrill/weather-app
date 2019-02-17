import * as React from 'react';
import WeatherIcons from '../classes/WeatherIcons';
import '@mdi/font/css/materialdesignicons.css';
import './WeatherDisplay.css';

interface IWeatherDisplayProps {
    weather: any;
}

export default (props: IWeatherDisplayProps) => {
    if (Object.keys(props.weather).length === 0) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="weather-display">
            <h1>Location</h1>
            <h2>{`${Math.floor(props.weather.currently.temperature)}°C`}</h2>
            <span className={`mdi mdi-${WeatherIcons.weatherType(props.weather.currently.icon).iconSlug}`} />
            <h3>{props.weather.currently.summary}</h3>
            <p>{props.weather.hourly.summary}</p>
        </div>
    );
};

