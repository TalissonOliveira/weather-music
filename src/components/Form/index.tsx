import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import { api } from '../../services/api'

interface ResponseData {
    main: {
        temp: number
    }
    name: string
}

export function Form() {
    const [weather, setWeather] = useState<ResponseData>()

    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_API_KEY)
        api.get<ResponseData>('weather', {
            params: {
                q: 'Londres',
                units: 'metric',
                appid: process.env.NEXT_PUBLIC_API_KEY
            }
        })
            .then(response => setWeather(response.data))
    }, [])

    useEffect(() => {
        if (weather !== undefined) {
            console.log(weather.main)
        }
    }, [weather])

    return (
        <form className={styles.form}>
            <input
                type="text"
                name="city"
                id="city"
                placeholder="Cidade"
            />
            <input
                type="text"
                name="lat"
                id="lat"
                placeholder="Latitude"
            />
            <input
                type="text"
                name="lon"
                id="lon"
                placeholder="Longitude"
            />

            <button type="submit">Buscar</button>
        </form>
    )
}