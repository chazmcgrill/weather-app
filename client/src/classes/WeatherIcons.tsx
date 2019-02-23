export default class WeatherIcons {
    public type: string;

    constructor(type: string) {
        this.type = type;
    }

    static weatherType(type: string) {
        return new WeatherIcons(type);
    }

    get iconSlug() {
        switch(this.type) {
            case 'clear-day':
                return 'weather-sunny';
            case 'clear-night':
                return 'weather-night';
            case 'rain':
                return 'weather-rainy';
            case 'snow':
                return 'weather-snowy';
            case 'sleet':
                return 'weather-snowy-rainy';
            case 'wind':
                return 'weather-windy';
            case 'fog':
                return 'weather-fog';
            case 'cloudy':
                return 'weather-cloudy';
            case 'partly-cloudy-day':
                return 'weather-partlycloudy';
            case 'partly-cloudy-night':
                return 'weather-partlycloudy';
            case 'hail':
                return 'weather-hail';
            case 'thunderstorm':
                return 'weather-lightning';
            default:
                return 'weather-sunny';
        }
    }
}