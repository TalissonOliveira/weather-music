import { Playlist } from '../../interfaces/interfaces'
import { formatCategory } from '../../scripts/formatCategory'

import styles from './styles.module.scss'

interface PlaylistInfoProps {
    playlist: Playlist
    handleDeletePlaylist: (value: any) => void
    index: number
}

export function PlaylistInfo({ playlist, handleDeletePlaylist, index }: PlaylistInfoProps) {
    return (
        <div className={styles['header']}>
            <div>
                <p className={styles['title']}>Playlist da categoria {formatCategory(playlist.category)}</p>
                <p className={styles['date']}>
                    Salva em {Intl.DateTimeFormat('pt-br').format(new Date(playlist.date))}
                    {' '}
                    com a temperatura de {playlist.temperature}° em {playlist.city}
                </p>
            </div>
            <span className={styles['delete']} onClick={() => handleDeletePlaylist(index)}>Excluir</span>
        </div>
    )
}