import { FormEvent, useState } from 'react'

import styles from './styles.module.scss'

import { api } from '../../services/api'

interface ResponseData {
    main: {
        temp: number
    }
    name: string
}

export function Form({ setWeather }) {
    const [city, setCity] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    function handleForm (event: FormEvent) {
        event.preventDefault()

        api.get<ResponseData>('weather', {
            params: {
                q: city,
                units: 'metric',
                appid: process.env.NEXT_PUBLIC_API_KEY
            }
        })
            .then(response => setWeather(response.data))
    }

    return (
        <form className={styles.form}>
            <input
                type="text"
                name="city"
                id="city"
                placeholder="Cidade"
                onChange={(event) => setCity(event.target.value)}
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

            <button onClick={handleForm}>Buscar</button>
        </form>
    )
}