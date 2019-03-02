import * as React from 'react';
import WeatherIcons from '../classes/WeatherIcons';
import NumberFormat from '../classes/NumberFormat';
import '@mdi/font/css/materialdesignicons.css';
import './WeatherDisplay.css';

interface IWeatherDisplayProps {
    weather: any;
    currentWeather: any,
    handleTextChange: any,
    locationText: string,
    handleLocationSubmit: any,
    location: any,
    isLoading: boolean,
}

export default (props: IWeatherDisplayProps) => {
    if (props.isLoading) {
        return <div>Loading...</div>;
    }

    const { currently } = props.weather;
    const { currentWeather } = props;

    let weather = {
        temp: currently.temperature,
        icon: currently.icon,
        summary: currently.summary,
        detailSummary: props.weather.hourly.summary,
        windSpeed: currently.windSpeed,
        humidity: currently.humidity,
        uvIndex: currently.uvIndex,
    }

    if (currentWeather) {
        weather = {
            temp: currentWeather.temperature,
            icon: currentWeather.icon,
            summary: currentWeather.summary,
            detailSummary: currentWeather.summary,
            windSpeed: currentWeather.windSpeed,
            humidity: currentWeather.humidity,
            uvIndex: currentWeather.uvIndex,
        }
    }
    
    return (
        <div className="weather-display">
            <h1>{props.location.addressLabel}</h1>
            <h2>{NumberFormat.from(weather.temp).degreesC}</h2>
            <span className={`weather-display--icon mdi mdi-${WeatherIcons.weatherType(weather.icon).iconSlug}`} />
            <h3>{weather.summary}</h3>
            <p>{weather.detailSummary}</p>

            <div>
                <span className="mdi mdi-weather-windy" />
                <span>{`${weather.windSpeed}mph`}</span>
            </div>
            <div>
                <span className="mdi mdi-umbrella" />
                <span>{`${weather.humidity * 100}%`}</span>
            </div>
            <div>
                <span>UV Index: </span>
                <span>{weather.uvIndex}</span>
            </div>
            <div className="location-box">
                <input type="text" value={props.locationText} onChange={props.handleTextChange} />
                <button onClick={props.handleLocationSubmit}>change location</button>
            </div>
        </div>
    );
};

