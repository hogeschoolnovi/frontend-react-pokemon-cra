import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Pokemon from "./Pokemon";
import Button from "./Button";

function App() {

    const [pokemon, setPokemon] = useState(null);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [loading, toggeleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const token = axios.CancelToken.source();

        async function fetchData() {
            toggeleLoading(true);
            setError(false);

            try {
                const result = await axios.get(url);
                setPokemon(result.data);
                toggeleLoading(false);

            } catch (e) {
                console.error(e);
                toggeleLoading(false);
                setError(true);
            }
        }
        fetchData();

        return () => {
            token.cancel('Operation canceled by user!')
        }

    }, [url]);

    return (
        <div className='pokemon-overview'>
            { pokemon && <Button previousUrl={pokemon.previous} nextUrl={pokemon.next} setUrl={setUrl} />}

            <ul className="pokemon-list">
                {pokemon && pokemon.results.map((eenPokemon) => {
                    return <li key={eenPokemon.name}> <Pokemon url={eenPokemon.url} /> </li>
                })}

                {loading && <p>Loading...</p>}
                {error && <p>Er is iets misgegaan bij het ophalen van de data...</p>}

            </ul>
        </div>
    );
}

export default App;