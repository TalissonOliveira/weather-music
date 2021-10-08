import Image from 'next/image'

import styles from './styles.module.scss'

export function PlaylistTrack() {
   
    return (
        <div className={styles['track-container']}>
            <Image 
                src="https://i.imgur.com/aUTOLz2.png"
                height={40}
                width={40}
                alt=''
            />
            <div className={styles['track-info']}>
                <p>Meditation: Méditation from Thaïs</p>
                <span>Jules Massenet</span>
            </div>
        </div>
    )
}