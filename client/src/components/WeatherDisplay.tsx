import * as React from 'react';
import WeatherIcons from '../classes/WeatherIcons';
import NumberFormat from '../classes/NumberFormat';
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
            <h1>New York</h1>
            <h2>{NumberFormat.from(props.weather.currently.temperature).degreesC}</h2>
            <span className={`weather-display--icon mdi mdi-${WeatherIcons.weatherType(props.weather.currently.icon).iconSlug}`} />
            <h3>{props.weather.currently.summary}</h3>
            <p>{props.weather.hourly.summary}</p>

            <div>
                <span className="mdi mdi-weather-windy" />
                <span>{`${props.weather.currently.windSpeed}mph`}</span>
            </div>
            <div>
                <span className="mdi mdi-umbrella" />
                <span>{`${props.weather.currently.humidity * 100}%`}</span>
            </div>
            <div>
                <span>UV Index: </span>
                <span>{props.weather.currently.uvIndex}</span>
            </div>
        </div>
    );
};

