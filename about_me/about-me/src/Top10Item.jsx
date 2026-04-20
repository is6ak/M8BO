import styles from './Top10Item.module.css'

export function Top10Item(props) {
    return (
        <li className={styles.book}>
            <div className={styles.bookNumber}>
                {props.number}
            </div>
            <div className={styles.bookContainer}>
                <h1 className={styles.bookTitle}>{props.title}</h1>
                <p className={styles.bookAuthor}>by {props.author}</p>
            </div>
        </li>
    )
}
