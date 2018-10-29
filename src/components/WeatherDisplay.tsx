import * as React from 'react';
import './WeatherDisplay.css';

interface IWeatherDisplayProps {
    data: any;
}

export default (props: IWeatherDisplayProps) => {
    if (Object.keys(props.data).length === 0) {
        return <div>Loading...</div>
    } 
    
    return <div className="weather-display">{props.data.weather[0].main}</div>;
};

