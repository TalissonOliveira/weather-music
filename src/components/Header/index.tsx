import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer} >
            <div className={styles.headerContent}>
                <h1>Weather Music</h1>
            </div>
        </header>
    )
}