import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pokemon } from './components/Pokemon';
import './App.css';
import { NavButtons } from './components/NavButtons';
import logo from './assets/pokemon-logo.png';

function App() {

  const [pokemons, setPokemons] = useState(null);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');

  useEffect(() => {

    async function fetchPokimonList() {
      try {
        const result = await axios.get(url);
        setPokemons(result.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokimonList();
  }, [url]);


  return (
    <>
      <header>
        <img alt="pokemon-logo" src={logo} />
      </header>
      { pokemons && <NavButtons previousUrl={pokemons.previous} nextUrl={pokemons.next} setUrl={setUrl} />}
      <ul className="pokemon-list">
        {pokemons ? pokemons.results.map(({ name }) => (
          <li key={name}>
            <Pokemon name={name} />
          </li>
        )) : (
            <h1>loading...</h1>
          )}
      </ul>
      { pokemons && <NavButtons previousUrl={pokemons.previous} nextUrl={pokemons.next} setUrl={setUrl} />}
    </>
  )
}

export default App;
