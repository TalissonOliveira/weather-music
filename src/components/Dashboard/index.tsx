import { useState } from 'react'
import styles from './styles.module.scss'

import { Form } from "../Form"
import { SavePlaylistButton } from '../SavePlaylistButton'
import { ShowTracks } from '../ShowTracks'

export interface WeatherInfos {
    main: {
        temp: number
    }
    name: string
}

export function Dashboard() {
    const [weather, setWeather] = useState<WeatherInfos>()

    return (
        <div className={styles.container}>
            <Form setWeather={setWeather} />
            <SavePlaylistButton />
            <ShowTracks weather={weather} />
        </div>
    )
}