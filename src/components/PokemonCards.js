import React, {useState, useEffect} from 'react'
import axios from "axios";
import './Pokemoncards.css'


export default function PokemonCards (props) {

    const [ pokemon, setPokemon ] = useState ();


    useEffect (() => {
        async function fetchPokemonData () {
            try {
                const result = await axios.get (`https://pokeapi.co/api/v2/pokemon/${props.name}`
                );

                setPokemon (result.data);
            } catch (e) {
                console.error (e);
            }
        }
        fetchPokemonData();

    }, [props.name]);

    console.log (pokemon)

    return (

        <div className="pokemonCards">
            <h1>{pokemon?.name}</h1>

           <img alt="pokemon?.name" src={pokemon?.sprites.front_default}/>

           <h2>Abilities: {pokemon?.abilities.map((ability) => {
               console.log (ability.ability.name)
               return <li key={ability.ability.name}>{ability.ability.name}</li>
           })}</h2>

           <h2>Moves: {pokemon?.moves.length}</h2>

            <h2>Weight: {pokemon?.weight}</h2>
        </div>
    )

};