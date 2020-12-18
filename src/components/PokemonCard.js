import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PokemonCard(props) {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {

        async function getPokemonData() {
            const result = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${props.name}`
            );

            setPokemon(result.data);
        }

        getPokemonData();
    }, [props.name]);

    return (
        <div className="pokemonCard">
            <h1>{pokemon?.name}</h1>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            <h3>Moves: {pokemon?.moves.length}</h3>
            <h3>Weight: {pokemon?.weight}</h3>
            <h3>Abilities: {pokemon?.abilities.map((ability) => {
                return <p className="abilitiesButton" key={pokemon?.name + ability.ability.name}>{ability.ability.name}</p>
            })}</h3>

        </div>
    );
}