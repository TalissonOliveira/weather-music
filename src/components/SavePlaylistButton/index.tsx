import styles from './styles.module.scss'

export function SavePlaylistButton() {
    return (
        <button className={styles['button']}>
            + Salvar playlist
        </button>
    )
}