import Axios from 'axios'
import React, { useEffect, useState } from 'react'

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


        return () => {
        }
    }, [])

    return (
        <div>
            <h1>Pokemon {pokemonDetails && pokemonDetails.name}</h1>
        </div>
    )
}
