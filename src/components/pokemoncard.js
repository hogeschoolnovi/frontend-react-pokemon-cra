import React, { useState, useEffect } from "react";
import Pokemonability from "./pokemonability";
import axios from "axios";

function Pokemoncard(props) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            setError(false);
            try {
                const url = props.url.replace(/\/$/, "");
                const result = await axios.get(
                    url
                );
                setPokemon(result.data);
                toggleLoading(false);
            } catch (e) {
                console.error(e);
                setError(true);
                toggleLoading(false);
            }
        }
        fetchData();

    }, [props.url]);

    return (
        <li key={pokemon && pokemon.id} className="Pokemon-card">
            {pokemon &&
            <h2>{pokemon.name}</h2>
            }
            {pokemon && pokemon.sprites.front_default
                ? <img alt="The pokemon is supposed to be here" width="96px" height="96px" src={pokemon.sprites.front_default}></img>
                : <img alt="The pokemon is supposed to be here"  width="187px" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"></img>
            }
            {pokemon &&
            <p><b>Moves:</b> {pokemon.moves.length}</p>
            }
            {pokemon &&
            <p><b>Weight:</b> {pokemon.weight}</p>
            }
            <b>Abilities:</b>
            <ul>
                {loading && <p>loading</p>}
                {error && <p>Something went wrong</p>}
                {pokemon &&
                pokemon.abilities.map((abilityList) => {
                    return (
                        <Pokemonability
                            key={abilityList.url}
                            name={abilityList.ability.name}
                        />
                    );
                })}
            </ul>
        </li>
    );
}

export default Pokemoncard;
