import axios from 'axios'

export const apiWeather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
})

export const apiSpotify = axios.create({
    baseURL: 'https://api.spotify.com/v1/'
})