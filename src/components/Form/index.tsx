import { FormEvent, useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import styles from './styles.module.scss'

import { apiWeather } from '../../services/api'
import { Context } from '../../context/context'

interface ResponseData {
    main: {
        temp: number
    }
    name: string
}

export function Form() {
    const [city, setCity] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const { setWeather } = useContext(Context)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            })
        }
    }, [])

    function handleForm (event: FormEvent) {
        event.preventDefault()
        if (!city) {
            return toast.error('Nome da cidade inválido!')
        }

        apiWeather.get<ResponseData>('weather', {
            params: {
                q: city,
                units: 'metric',
                appid: process.env.NEXT_PUBLIC_API_KEY
            }
        })
            .then(response => setWeather(response.data))
            .catch(error => {
                console.log(error)
                toast.error('Nome da cidade inválido!')
            })
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
                value={latitude !== 0 ? latitude : ''}
                onChange={(event) => setLatitude(Number(event.target.value))}
                disabled
            />
            <input
                type="text"
                name="lon"
                id="lon"
                placeholder="Longitude"
                value={longitude !== 0 ? longitude : ''}
                onChange={(event) => setLongitude(Number(event.target.value))}
                disabled
            />

            <button onClick={handleForm}>Buscar</button>
            <ToastContainer />
        </form>
    )
}