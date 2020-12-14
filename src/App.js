import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from "./component/PokemonCard";
import logo from "./assets/PokemonLogo.svg";


const pokemon_API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';

function App() {

    const [pokemonCards, setPokemonCards] = useState([]);
    const [actiefPage, setActiefPage] = useState(pokemon_API_URL);
    const [previousPage, setPreviousPage] = useState("");
    const [nextPage, setNextPage] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState(false);

    useEffect(()=>{
        async function fetchData(){
            try{
                toggleLoading(true);

                const result = await axios.get(actiefPage);
                setPreviousPage(result.data.previous);
                setNextPage(result.data.next);
                setPokemonCards(result.data.results.map((endpoint)=>{
                    return <PokemonCard key={endpoint.name} endPointPokemonData={endpoint.url}/>
                }));

                toggleLoading(false);
            }catch(e){
                console.error(e);
                toggleLoading(false);
                setErrorLoading(true);
            }
        }
        fetchData();

    },[actiefPage])

  return (
    <div>
        <img className="pokemon-logo" src={logo} alt="pokemon-logo" />

        {loading &&
            <h1 className="loading-msg">Loading....</h1>}
        {errorLoading &&
            <h3 className="error-msg">Oops!!! Something went wrong during loading, Please try again later</h3>}

        <button
            type="button"
            className={previousPage ? "btn-enabled":"btn-disabled"}
            disabled={previousPage ? "":"disabled"}
            onClick={()=>setActiefPage(previousPage)}
        >Vorige</button>

        <button
            type="button"
            className={nextPage ? "btn-enabled":"btn-disabled"}
            disabled={nextPage ? "":"disabled"}
            onClick={()=>setActiefPage(nextPage)}
        >Volgende</button>

        {(pokemonCards.length > 0) &&
            <div className="container">
                <div className="container-cards">
                    {pokemonCards}
                </div>
            </div>
        }
    </div>
  );
}

export default App;
