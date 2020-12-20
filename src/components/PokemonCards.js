import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonTypes from "./PokemonTypes";

export default function PokemonCard(props){

    const [pokemon, setPokemon] = useState();



    useEffect(() => {


        async function getPokemonData(){

            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`); //dacdicks later

            setPokemon(result.data);
        }
        //functie aanroepen
        getPokemonData();

    }, [props.name]);

    //Informatie weergeven
    //console.log("Welke data hebben we nog meer?", pokemon && pokemon);
    return (
        <div>

            <h1>{pokemon?.name}</h1>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            <h3>Moves: {pokemon?.moves.length}</h3>
            <h3>Weight: {pokemon?.weight}</h3>
            <h3 className="abilities">Abilities</h3>
            <ul>
                {pokemon && pokemon.abilities.map((abilityItem) => {
                    return (
                        <button key={abilityItem.slot}>{abilityItem.ability.name}</button>
                    );
                })}
            </ul>




        </div>
    );

}