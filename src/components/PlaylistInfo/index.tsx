import { useContext } from 'react'
import { Context } from '../../context/context'
import { Playlist } from '../../interfaces/interfaces'
import { formatCategory } from '../../scripts/formatCategory'

import styles from './styles.module.scss'

interface PlaylistInfoProps {
    playlist: Playlist
    index: number
}

export function PlaylistInfo({ playlist, index }: PlaylistInfoProps) {
    const { playlists, setPlaylists } = useContext(Context)

    function handleDeletePlaylist(playlistIndex: number) {
        const deletedPlaylists = playlists.splice(playlistIndex, 1)
        const newPlaylists = playlists.filter(playlist => { return playlist !== deletedPlaylists[0]})
        setPlaylists(newPlaylists)
        localStorage.setItem('playlists', JSON.stringify(newPlaylists))
    }

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