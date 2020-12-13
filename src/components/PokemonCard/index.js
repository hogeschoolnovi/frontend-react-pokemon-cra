import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./index.css"


function PokemonCard({pokemonName}){
    //console.log("pokemonnummer--> ", pokemonName);
    const [pokemon,setPokemon] = useState(null);
    //console.log("poke--> ", pokemon);
    useEffect( () => {
        async function fetchPokemon() {
            try {
                //console.log("pokemon3--> ", pokemonName);
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                //const result2 = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`)
                setPokemon(result.data);
                //console.log("result--> ", result2.data);

            } catch (e) {
                console.error(e);
            }
        }
        if(pokemon === null) {
            fetchPokemon();
            //console.log("pokemon4--> ", pokemonName);
        }

    },[pokemonName,pokemon]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return(
        <div className="pokemon-card">
            {pokemon &&
                <>
                    <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
                    <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} width="auto" height="60"/>
                    <p><strong>Moves:</strong>{pokemon.moves.length}</p>
                    <p><strong>Weight:</strong>{pokemon.weight}</p>
                    <h2>Abilities:</h2>
                    <ul>
                        {pokemon && pokemon.abilities.map((ability) => {
                            return (<li  key={pokemon.name + ability.slot}>{capitalizeFirstLetter(ability.ability.name)}</li>)
                        })}
                    </ul>
                    </>
            }
         </div>
    )
}

export default PokemonCard;
