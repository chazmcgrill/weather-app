export interface IWeather {
    hourly?: {
        data: {}[],
        summary: string,
    }
    currently?: {
        temperature: number
        icon: string,
        summary: string,
        windSpeed: number,
        humidity: number,
        uvIndex: number,
    },
    daily?: {
        data: {}[]
    }
}

export interface IForecast {
    temperature: number
    icon: string,
    summary: string,
    windSpeed: number,
    humidity: number,
    uvIndex: number,
    time: number,
    temperatureMax: number,
    temperatureMin: number,
}