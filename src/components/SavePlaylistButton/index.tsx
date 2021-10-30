import { useContext, useEffect } from 'react'
import { Context } from '../../context/context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import styles from './styles.module.scss'

export function SavePlaylistButton() {
    const { playlists, setPlaylists, playlist } = useContext(Context)

    useEffect(() => {
        function addPlaylistsToLocalStorage() {
            const reversedPlaylists = playlists.reverse()
            localStorage.setItem('playlists', JSON.stringify(reversedPlaylists))
        }
        addPlaylistsToLocalStorage()
    }, [playlists])

    async function handleSavePlaylist() {
        setPlaylists([...playlists, playlist])
        toast.success('Playlist salva com sucesso!')
    }

    return (
        <button
            className={styles['button']}
            onClick={handleSavePlaylist}
        >
            + Salvar playlist
        </button>
    )
}