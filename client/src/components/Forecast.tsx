import * as React from 'react';
import WeatherIcons from '../classes/WeatherIcons';
import NumberFormat from '../classes/NumberFormat';
import '@mdi/font/css/materialdesignicons.css';
import './Forecast.css';
import { IWeather, IForecast } from '../interfaces';

interface IForecastProps {
    weather: IWeather,
    handleForecastClick: (idx: number) => void,
}

export default (props: IForecastProps) => {
    if (Object.keys(props.weather).length === 0) {
        return <div>Loading...</div>
    }

    const { data: forecast } = props.weather.daily!;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let currentDay = new Date().getDay();

    return (
        <div className="forecast">
            {forecast.slice(0, 6).map((day: any, idx) => {
                const dayIndex = currentDay + idx > 6 ? currentDay + idx - 7 : currentDay + idx;
                const dayText = days[dayIndex];
                return (
                    <div key={day.time} className="forecast-card" onClick={() => props.handleForecastClick(idx)}>
                        <span>{dayText}</span>
                        <span className={`mdi mdi-${WeatherIcons.weatherType(day.icon).iconSlug}`} />
                        <span>{NumberFormat.from(day.temperatureMax).degreesC}</span>
                        <span>{NumberFormat.from(day.temperatureMin).degreesC}</span>
                    </div>
                )
            })}
        </div>
    );
}

