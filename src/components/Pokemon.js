import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Pokemon.css';

export const Pokemon = ({ name }) => {

    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                console.log(result.data);
                setPokemonDetails(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [name]);

    return (
        <div class="pokemon-card">
            {pokemonDetails ? (
                <ul>
                    <li><h3>{pokemonDetails.name}</h3></li>
                    <li><img src={pokemonDetails.sprites.front_default} alt={`Afbeelding ${pokemonDetails.name}`} /></li>
                    <li>Moves: {pokemonDetails.moves.length}</li>
                    <li>Weight: {pokemonDetails.weight}</li>
                    <li>Abilities:
                        <ul>
                            {pokemonDetails.abilities.map(({ ability }) => (
                                <li>{ability.name}</li>
                            ))}
                        </ul>
                    </li>

                </ul>
            ) : (
                    <span>loading...</span>
                )
            }
        </div>
    )
}
