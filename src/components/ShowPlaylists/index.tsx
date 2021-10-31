import { useContext } from "react"
import { Context } from "../../context/context"
import { PlaylistTrack } from "../PlaylistTrack"
import { PlaylistInfo } from "../PlaylistInfo"
import { toast } from "react-toastify"

import styles from './styles.module.scss'

export function ShowPlaylists() {
    const { playlists, setPlaylists } = useContext(Context)

    function handleDeletePlaylist(index) {
        const deletedPlaylists = playlists.splice(index, 1)
        const newPlaylists = playlists.filter(playlist => { return playlist !== deletedPlaylists[0]})
        setPlaylists(newPlaylists)
        localStorage.setItem('playlists', JSON.stringify(newPlaylists))
        toast.success('Playlist excluída!')
    }

    return (
        <div className={styles['playlists-container']}>
        {playlists?.length > 0 ? 
            playlists?.map((playlist, index) => {
                return (
                    <div key={index} className={styles['playlist']}>
                        <PlaylistInfo
                            playlist={playlist}
                            index={index}
                            handleDeletePlaylist={handleDeletePlaylist}
                        />
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
            <p className={styles['no-playlist']}>Nada por aqui.<br/>Salve uma playlist primeiro</p>
        }
        </div>
    )
}