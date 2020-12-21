import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PokemonCard from './PokemonCard'
import pokemonlogo from './assets/Pokemon-Logo.png'

function App() {

    const [pokemonData, setPokemonData] = useState(null);
    const [previousLink, setPreviousLink] = useState(null);
    const [nextLink, setNextLink] = useState(null);
    const [linkToCollect, setLinkToCollect] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    const [error, setError] = useState("");

    function previousPage(){
        setLinkToCollect(previousLink);
        console.log(linkToCollect)
    }

    function nextPage(){
        setLinkToCollect(nextLink);
        console.log(linkToCollect)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(linkToCollect);
                setPokemonData(result.data.results);
                setNextLink(result.data.next);
                setPreviousLink(result.data.previous);
                console.log(result);

            } catch (e) {
                setError(e);
                console.error()
            }
        }
        fetchData();
    }, [linkToCollect]);
    console.log(pokemonData)

  return (
    <>
        <img src={pokemonlogo} alt="Pokemonlogo" id="pokemonlogo" />

        <div id="nav-buttons">
            <button
                disabled={!previousLink}
                className={!previousLink ? "disabled-button" : "enabled-button"}
                type="button"
                onClick={previousPage}
            >
                Vorige
            </button>
            <button
                disabled={!nextLink}
                className={!nextLink ? "disabled-button" : "enabled-button"}
                type="button"
                onClick={nextPage}
            >
                Volgende
            </button>
        </div>

        {/*{pokemonData ?*/}
        <div className="pokemon-wrapper">
            {pokemonData && pokemonData.map((pokemon) => {
                return (
                    <PokemonCard url={pokemon.url}/>
                )
             })}
        </div>
        {/*: <h3>There has been an error, please refresh the page</h3>}*/}

    </>
  );
}

export default App;
