import API_KEY from './api_key';
import axios from 'axios';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}&q=`;

export const FETCH_WEATHER = Symbol('FETCH_WEATHER')    ;

export function fetchWeather(city) {
    const request =  axios.get(ApplyQuery(city));
    console.log('request: ', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

function ApplyQuery(query){
    return `${ROOT_URL}${query},pl`;
}