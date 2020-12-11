import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Pokemon } from './components/Pokemon';
import './App.css';
import { NavButtons } from './components/NavButtons';
import logo from './assets/pokemon-logo.png';

function App() {

  const [pokimons, setPokimons] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');

  useEffect(() => {

    async function fetchPokimonList() {
      try {
        const result = await Axios.get(url);
        setPreviousUrl(result.data.previous);
        setNextUrl(result.data.next);
        setPokimons(result.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokimonList();
  }, [url]);


  return (
    <>
      <header><img alt="pokemon-logo" src={logo} /></header>
      <NavButtons previousUrl={previousUrl} nextUrl={nextUrl} setUrl={setUrl} />
      <ul class="pokemon-list">
        {pokimons ? pokimons.results.map(({ name }) => (
          <li key={name}>
            <Pokemon name={name} />
          </li>
        )) : (
            <h1>loading...</h1>
          )}
      </ul>
    </>
  )
}

export default App;
