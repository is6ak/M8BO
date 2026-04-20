import styles from './Navbar.module.css'
import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link to="/about">About</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to="/games">Games</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}