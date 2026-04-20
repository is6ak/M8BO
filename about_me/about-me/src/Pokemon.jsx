import styles from './Pokemon.module.css'
import loadingImg from './assets/loading.gif'
import { useEffect, useState } from "react";

export function Pokemon() {
    const [pokemon, setPokemon] = useState(null);
    const [description, setDescription] = useState("");
    const [moves, setMoves] = useState([]);
    const [search, setSearch] = useState("254");

    const typeColors = {
        fire: "red",
        grass: "green",
        water: "blue",
        electric: "yellow",
        psychic: "purple",
        poison: "violet"
    };

    function loadPokemon() {
        setPokemon(null);
        setDescription("");
        setMoves([]);

        fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
            .then(res => res.json())
            .then(data => {
                setPokemon(data);

                fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`)
                    .then(res => res.json())
                    .then(species => {
                        const entry = species.flavor_text_entries.find(
                            entry => entry.language.name === "en"
                        );

                        if (entry) {
                            setDescription(entry.flavor_text.replace(/\f|\n/g, " "));
                        }
                    });

                const levelUpMoves = data.moves.filter(move =>
                    move.version_group_details.some(detail =>
                        detail.move_learn_method.name === "level-up"
                    )
                );

                Promise.all(
                    levelUpMoves.map(move =>
                        fetch(move.move.url)
                            .then(res => res.json())
                            .then(moveData => ({
                                name: moveData.name,
                                type: moveData.type.name
                            }))
                    )
                ).then(allMoves => {
                    setMoves(allMoves);
                });
            });
    }

    useEffect(() => {
        loadPokemon();
    }, []);

    if (pokemon === null) {
        return (
            <section className={styles.pokemon}>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search pokemon..."
                    />
                    <button onClick={loadPokemon}>Search</button>
                </div>

                <div className={styles.loading}>
                    <h1 className={styles.loading__title}>Loading..</h1>
                    <img src={loadingImg} className={styles.loading__gif} alt="Loading Gif" />
                </div>
            </section>
        )
    } else {
        const type = pokemon.types[0].type.name;
        const bgColor = typeColors[type] || "gray";

        return (
            <section className={styles.pokemon}>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search pokemon..."
                    />
                    <button onClick={loadPokemon}>Search</button>
                </div>

                <div className={styles.pokemonReceived}>
                    <h2
                        className={styles.name}
                        style={{ backgroundColor: bgColor }}
                    >
                        {pokemon.name}
                    </h2>

                    <img
                        src={pokemon.sprites.front_default}
                        className={styles.pokemonPicture}
                        alt={pokemon.name}
                    />

                    <p className={styles.description}>{description}</p>

                    <div className={styles.movesSection}>
                        <h3>Moves</h3>
                        <ul className={styles.movesList}>
                            {moves.map((move, index) => {
                                const isStab = pokemon.types.some(
                                    pokemonType => pokemonType.type.name === move.type
                                );

                                return (
                                    <li
                                        key={index}
                                        className={`${styles.moveItem} ${isStab ? styles.stab : ""}`}
                                    >
                                        {move.name} - {move.type} {isStab ? "(STAB)" : ""}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}