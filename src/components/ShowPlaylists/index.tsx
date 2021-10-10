import { useEffect, useContext } from "react"
import { Context } from "../../context/context"
import { PlaylistTrack } from "../PlaylistTrack"

import { formatCategory } from '../../scripts/formatCategory'

import styles from './styles.module.scss'

export function ShowPlaylists() {
    const { playlists, setPlaylists } = useContext(Context)

    useEffect(() => {
        function getPlaylistsLocalStorage() {
            const parsedPlaylists = JSON.parse(localStorage.getItem('playlists'))
            setPlaylists(parsedPlaylists?.reverse())
        }
        getPlaylistsLocalStorage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleDeletePlaylist(index) {
        const deletedPlaylists = playlists.splice(index, 1)
        const newPlaylists = playlists.filter(playlist => { return playlist !== deletedPlaylists[0]})
        setPlaylists(newPlaylists)
        localStorage.setItem('playlists', JSON.stringify(newPlaylists))
    }

    return (
        <div className={styles['playlists-container']}>
        {playlists.length > 0 ? 
            playlists?.map((playlist, index) => {
                return (
                    <div key={''} className={styles['playlist']}>
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
                        {
                            playlist?.tracks.map(({track}) => {
                                return (
                                    <PlaylistTrack
                                        key={track.name}
                                        name={track.name}
                                        artists={track.artists}
                                        album={track.album}
                                        external_urls={track.external_urls}
                                        explicit={track.explicit}
                                        preview_url={track.preview_url}
                                    />
                                )
                            })
                        }
                    </div>
                )
            })
            :
            <p>Nada por aqui.<br/>Salve uma playlist primeiro</p>
        }
        </div>
    )
}