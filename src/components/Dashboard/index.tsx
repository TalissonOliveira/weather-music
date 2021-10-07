import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import { Form } from "../Form"

interface ResponseData {
    main: {
        temp: number
    }
    name: string
}

export function Dashboard() {
    const [weather, setWeather] = useState<ResponseData>()

    useEffect(() => {
        if (weather !== undefined) {
            console.log(weather)
        }
    }, [weather])

    return (
        <div className={styles.container}>
            <Form setWeather={setWeather} />
        </div>
    )
}