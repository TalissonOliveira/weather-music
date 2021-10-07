import styles from './styles.module.scss'

export function Form() {
    return (
        <form className={styles.form}>
            <input
                type="text"
                name="city"
                id="city"
                placeholder="Cidade"
            />
            <input
                type="text"
                name="lat"
                id="lat"
                placeholder="Latitude"
            />
            <input
                type="text"
                name="lon"
                id="lon"
                placeholder="Longitude"
            />

            <button type="submit">Buscar</button>
        </form>
    )
}