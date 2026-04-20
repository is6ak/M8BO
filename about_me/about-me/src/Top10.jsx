import styles from './Top10.module.css'
import { Top10Item } from './Top10Item'

let top10 = [
    { title: "The Silent Patient", author: "Alex Michaelides" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "Dune", author: "Frank Herbert" },
    { title: "The Midnight Library", author: "Matt Haig" },
    { title: "1984", author: "George Orwell" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "It Ends With Us", author: "Colleen Hoover" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { title: "The Psychology of Money", author: "Morgan Housel" }
];


export function Top10() {
    return (
        <section className={styles.top10}>
            <h1 className={styles.top10__title}>Top 10 Favorite Books</h1>
            <ol className={styles.book__list}>
                {top10.map((item, index) => (
                    <Top10Item
                        key={index}
                        title={item.title}
                        author={item.author}
                        number={index + 1}
                    />
                ))}
            </ol>
        </section>
    )
}
