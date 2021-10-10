import { useContext } from 'react'

import styles from './styles.module.scss'

import { Form } from "../Form"
import { SavePlaylistButton } from '../SavePlaylistButton'
import { ShowTracks } from '../ShowTracks'
import { Context } from '../../context/context'
import { formatCategory } from '../../scripts/formatCategory'

export function Dashboard() {
    const { category, tracks } = useContext(Context)

    return (
        <div className={styles['container']}>
            <Form />
            {
                tracks.length > 0 &&
                <div className={styles['options']}>
                    <p>Playlist com músicas da categoria {formatCategory(category)}</p>
                    <SavePlaylistButton />
                </div>
            }
            <ShowTracks />
        </div>
    )
}