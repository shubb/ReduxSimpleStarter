import axios from 'axios'

const API_KEY = '539ac5d590eb150d902c33083ce87896';
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${URL}&q=${city},us`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
