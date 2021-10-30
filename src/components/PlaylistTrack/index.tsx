import Image from 'next/image'
import { PlaylistTrackProps } from '../../interfaces/interfaces'

import styles from './styles.module.scss'

export function PlaylistTrack({
    name,
    artists,
    explicit,
    album,
    preview_url,
    external_urls
    }: PlaylistTrackProps) {
   
    return (
        <div className={styles['track-container']}>
            <Image
                src={album.images[0].url}
                height={40}
                width={40}
                alt=''
            />
            <div className={styles['track-info']}>
                <a href={external_urls.spotify}
                    rel="noreferrer"
                    target="_blank"
                >
                    {name}
                </a>
                <a href={artists[0].external_urls.spotify}
                    rel="noreferrer"
                    target="_blank"
                >
                    {artists[0].name}
                </a>
            </div>
        </div>
    )
}