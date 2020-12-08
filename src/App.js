import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Pokemon } from './components/Pokemon';

function App() {

  const [pokimonList, setPokimonList] = useState(null);
  const [offset, setOffset] = useState(0);
  const [pokimonName, setPokimonName] = useState('');
  // const [limit, setLimit] = useState(20);

  useEffect(() => {
    async function fetchPokimonList() {
      try {
        const result = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
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
    <div>
      <button
        type="button"
        onClick={() => {
          if (offset - 20 > -1) {
            setOffset(offset - 20);
          }
        }}
      >
        Vorige
        </button>
      <button
        type="button"
        onClick={() => {
          if (offset + 20 < pokimonList.count + 1)
            setOffset(offset + 20);
        }}
      >Volgende
        </button>
      <ul>
        {pokimonList ? pokimonList.results.map((pokimon) => (
          <li key={pokimon.name} onClick={() => setPokimonName(pokimon.name)}>{pokimon.name}</li>
        )) : (
            <h1>loading...</h1>
          )}
      </ul>
      {pokimonName && (
        <Pokemon name={pokimonName}

        />)
      }

    </div>
  )
}

export default App;
