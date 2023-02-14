import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export function Header () {
    return (
            <header>
                <nav className={styles.nav}>
                    <Link to="/">Home</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/perfil/Jubileu">Perfil</Link>
                </nav>
            </header>
    )
}