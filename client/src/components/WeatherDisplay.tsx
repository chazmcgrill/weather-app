import * as React from 'react';
import WeatherIcons from '../classes/WeatherIcons';
import '@mdi/font/css/materialdesignicons.css'
import './WeatherDisplay.css';

interface IWeatherDisplayProps {
    data: any;
}

export default (props: IWeatherDisplayProps) => {
    if (Object.keys(props.data).length === 0) {
        return <div>Loading...</div>;
    }
    
    return <div className="weather-display">
        <h1>Location</h1>
        <h2>{`${Math.floor(props.data.currently.temperature)}°C`}</h2>
        <span className={`mdi mdi-${WeatherIcons.weatherType(props.data.currently.icon).iconSlug}`} />
        <h3>{props.data.currently.summary}</h3>
        <p>{props.data.hourly.summary}</p>
      </div>;
};

