import { useContext } from 'react'
import { Context } from '../../context/context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import styles from './styles.module.scss'

export function SavePlaylistButton() {
    const { playlists, playlist } = useContext(Context)

    async function handleSavePlaylist() {
        playlists.unshift(playlist)
        localStorage.setItem('playlists', JSON.stringify(playlists))
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