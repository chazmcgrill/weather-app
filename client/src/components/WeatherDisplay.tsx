import * as React from 'react';
import WeatherIcons from '../classes/WeatherIcons';
import NumberFormat from '../classes/NumberFormat';
import '@mdi/font/css/materialdesignicons.css';
import './WeatherDisplay.css';
import { IWeather } from '../interfaces';

interface IWeatherDisplayProps {
    weather: IWeather;
    currentWeather: any,
    handleTextChange: any,
    locationText: string,
    handleLocationSubmit: any,
    location: any,
    isLoading: boolean,
    temperature: string,
    speed: string,
}

export default (props: IWeatherDisplayProps) => {

    if (props.isLoading) {
        return <div>Loading...</div>;
    }

    const { currently } = props.weather;
    const { currentWeather } = props;

    let weather = {
        temp: currently!.temperature,
        icon: currently!.icon,
        summary: currently!.summary,
        detailSummary: props.weather.hourly!.summary,
        windSpeed: currently!.windSpeed,
        humidity: currently!.humidity,
        uvIndex: currently!.uvIndex,
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

    const tempSetting = props.temperature === 'Celcius' ? 'degreesC' : 'degreesF';
    
    return (
        <div className="weather-display">
            <div className="weather-display-wrapper">
                <h1>{props.location.addressLabel}</h1>
                <h2>{NumberFormat.from(weather.temp)[tempSetting]}</h2>
                <span className={`weather-display--icon mdi mdi-${WeatherIcons.weatherType(weather.icon).iconSlug}`} />
                <h3>{weather.summary}</h3>
                <p>{weather.detailSummary}</p>

                <div className="weather-stats">
                    <div className="weather-stat">
                        <span className="mdi mdi-weather-windy weather-stat-icon" />
                        <span className="weather-stat-text">{NumberFormat.from(weather.windSpeed)[props.speed]}</span>
                    </div>
                    <div className="weather-stat">
                        <span className="mdi mdi-umbrella weather-stat-icon" />
                        <span className="weather-stat-text">{NumberFormat.from(weather.humidity).factorToPercent}</span>
                    </div>
                    <div className="weather-stat">
                        <span className="mdi mdi-sunglasses weather-stat-icon" />
                        <span className="weather-stat-text">{weather.uvIndex}</span>
                    </div>
                </div>

                <div className="location-box">
                    <input type="text" value={props.locationText} onChange={props.handleTextChange} />
                    <button onClick={props.handleLocationSubmit}>change location</button>
                </div>
            </div>
        </div>
    );
};

