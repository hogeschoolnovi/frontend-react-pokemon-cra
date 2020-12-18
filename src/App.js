import { useState, useEffect } from "react";
import axios from "axios";



import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [pagina, setPagina] = useState(null);


  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=20`
        );
        setPokemons(response.data.results);
      } catch (error) {
        alert("Oops, the pokemons got away");
      }
    }

    getPokemons();
  }, [pagina]);


  return (
  <>
      <header>
        <img className="logo" src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" alt="the word Pokemon"/>
      </header>
      <div className="pageButtons">
          <button className="pageButton1" disabled={pagina === 0} onClick={() => setPagina(pagina - 20)}> Vorige </button>
          <button className="pageButton2" disabled={pagina === 1100} onClick={() => setPagina(pagina + 20)}> Volgende </button>
      </div>
      <div className="App">
        {pokemons &&
        pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} name={pokemon.name}/>;
        })}
      </div>
  </>
  );
}

export default App;
