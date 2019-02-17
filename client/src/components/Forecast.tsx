import * as React from 'react';
import WeatherIcons from '../classes/WeatherIcons';
import NumberFormat from '../classes/NumberFormat';
import '@mdi/font/css/materialdesignicons.css';
import './Forecast.css';

interface IForecastProps {
    weather: any
}

export default (props: IForecastProps) => {
    if (Object.keys(props.weather).length === 0) {
        return <div>Loading...</div>
    }

    const { data: forecast } = props.weather.daily;

    return (
        <div className="forecast">
            {forecast.map((day: any) => (
                <div key={day.time} className="forecast-card">
                    <span className={`mdi mdi-${WeatherIcons.weatherType(day.icon).iconSlug}`} />
                    <span>{NumberFormat.from(day.temperatureMax).degreesC}</span>
                    <span>{NumberFormat.from(day.temperatureMin).degreesC}</span>
                </div>
            ))}
        </div>
    );
}

