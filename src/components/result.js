import React, {useContext, useEffect, useState} from 'react';
import {CounterContext} from '../context/CounterContextProvider';
import axios from 'axios';
import Pokemoncard from './pokemoncard';

function Result(){
    const { count } = useContext(CounterContext);
    const [pokemonList, setPokemonList] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            setError(false);
            const offset = count * 20;
            try {
                const result = await axios.get(
                    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=" + offset
                );
                setPokemonList(result.data.results);
                toggleLoading(false);
            } catch (e) {
                console.error(e);
                setError(true);
                toggleLoading(false);
            }
        }
        fetchData();
    }, [count]);

    return (
        <div>
            <h1>Pokemon list:</h1>
            <div id="parent">
                <ul>
                    {loading && <p>loading</p>}
                    {error && <p>Something went wrong</p>}
                    {pokemonList &&
                    pokemonList.map((pokemonList) => {
                        return (
                            <Pokemoncard
                                key={pokemonList.id}
                                url={pokemonList.url}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Result;