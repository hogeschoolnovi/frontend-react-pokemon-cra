import React, {useState, useEffect} from 'react';
import "./index.css"
import axios from "axios";


function PokemonCard({pokemon}){

    const [pokemonData,setPokemonData] = useState(null)
    useEffect( () => {
        async function fetchPokemon() {
            try {
                const result = await axios.get(pokemon);
                setPokemonData(result.data)
            } catch (e) {
                console.error(e);
            }
        }

            fetchPokemon();

        },[pokemon])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return(
        <div className="pokemon-card">
            {pokemonData &&
                <>
                    <h1>{capitalizeFirstLetter(pokemonData.name)}</h1>
                    <img src={pokemonData.sprites.back_default} alt={pokemonData.name} width="auto" height="60"/>
                    <p><strong>Weight:</strong>{pokemonData.weight}</p>
                    <h2>Abilities:</h2>
                    <ul>
                        {pokemonData && pokemonData.abilities.map((ability) => {
                            return (<li  key={pokemonData.name + ability.slot}>{capitalizeFirstLetter(ability.ability.name)}</li>)
                        })}
                    </ul>
                </>
            }
         </div>
    )
}

export default PokemonCard;
