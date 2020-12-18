import React ,{ useState, useEffect}from 'react';
import "./PokemonList.css"
import axios from "axios";
import PokemonCard from "../pokemonCard/";

function PokemonList({previousOrNext}){

    const [pokemon,setPokemon] = useState(null);
    useEffect( () => {
        async function fetchPokemon(url) {
            try {
                const result = await axios.get(url);
                setPokemon(result.data);

            } catch (e) {
                console.error(e);
            }
        }

        if (pokemon === null){
            fetchPokemon(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
        }
        if (previousOrNext > 0 && pokemon.next != null){
            fetchPokemon(pokemon.next);
        }
        if(previousOrNext < 0 && pokemon.previous != null){
            fetchPokemon(pokemon.previous)
        }


    },[previousOrNext]);

    return(
    <div id="wrapper">
        {pokemon && pokemon.results.map(pokemonNameAndUrl =>(<PokemonCard key={pokemonNameAndUrl.name} pokemon={pokemonNameAndUrl.url}/>))}
    </div>)


}

export default PokemonList;