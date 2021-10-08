import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer} >
            <div className={styles.headerContent}>
                <h1>Encontre a playlist <br/>ideal para o clima do seu dia! :)</h1>
            </div>
        </header>
    )
}