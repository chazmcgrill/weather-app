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
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let currentDay = new Date().getDay();

    return (
        <div className="forecast">
            {forecast.map((day: any, i: number) => {
                const index = currentDay + i > 6 ? currentDay + i - 7 : currentDay + i;
                const dayText = days[index];
                return (
                    <div key={day.time} className="forecast-card">
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

