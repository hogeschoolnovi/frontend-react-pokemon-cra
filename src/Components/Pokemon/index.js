import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';



const Pokemon = ({ name }) => {

    const [pokemonData, setPokemonData] = useState();

    useEffect(() => {
            async function fetchPokemon() {
                try {
                    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    console.log(result.data);
                    setPokemonData(result.data);
                } catch (e) {
                    console.error(e);
                }
            }
            fetchPokemon();
        }
        ,[]);

    return (
        <>
            {pokemonData &&
                <div className='pokemon-card'>
                    <div className="pokemon-name">
                        {pokemonData.name}
                    </div>
                    <img
                        className="pokemon-image"
                        src={pokemonData.sprites.front_default}
                        alt="Pokemon portrait"
                    />
                    <div className="pokemon-stats-container">
                        <p className="pokemon-stats">
                            Moves: {pokemonData.moves.length}
                        </p>
                        <p className="pokemon-stats">
                            Weight: {pokemonData.weight}
                        </p>
                        {/*<p className="pokemon-stats">Abilities:</p>*/}
                        <ul className="pokemon-ability-list">
                            <p>Abilities:</p>
                            {pokemonData && pokemonData.abilities.map(ability => (
                                <li key={ability.ability.name}>{ability.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default Pokemon;
