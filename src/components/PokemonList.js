import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export const PokemonList = ({ offset }) => {

    const [pokimonList, setPokimonList] = useState(null);

    useEffect(() => {
        async function fetchPokimonList() {
            try {
                const result = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=200&offset=${offset}`);
                console.log(result.data);
                console.log(result.data.count);
                setPokimonList(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPokimonList();

        return () => {
        }
    }, [offset])

    return (
        <ul>
            {pokimonList ? pokimonList.results.map((pokimon) => (
                <li key={pokimon.name} onClick={() => setPokimonName(pokimon.name)}>{pokimon.name}</li>
            )) : (
                    <h1>loading...</h1>
                )}
        </ul>
    )
}
