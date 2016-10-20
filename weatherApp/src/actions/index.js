import API_KEY from './api_key';
import axios from 'axios';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}&q=`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const request =  axios.get(ApplyQuery(city));
    return {
        type: FETCH_WEATHER,
        payload: {
            promise: request,
            onSuccess: (x) => x,
            onError: (x) => x
        }
    }
}

function ApplyQuery(query){
    return `${ROOT_URL}${query},pl`;
}