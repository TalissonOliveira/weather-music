import styles from './styles.module.scss'

export function Header({ children }) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                {children}
            </div>
        </header>
    )
}