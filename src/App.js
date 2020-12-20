import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCards";
import axios from "axios";

function App() {

    const [pokemons, setPokemons] = useState(null);
    const [status, setStatus] = useState('loading')
    const [pagina, setPagina] = useState(0);

    //console.log("Pokemons", pokemons);




    useEffect(() => {
        //Async function maken/definieren
        async function getPokemons(){
            try {
                //data fetchen uit de api, een array met pokemon (namen)
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=20`);
                //console.log("Dit kregen we terug:", response.data.results);

                //de state updaten met de response uit de api
                setPokemons(response.data.results);
                setStatus('done loading');
            } catch (error) {
                setStatus("error");
            }

        }
        //aanroepen
        getPokemons();


    }, [pagina]);


    if(status === 'loading'){
        return <h1>Loading</h1>
    } else if(status === "error") {
        return <h1>O jee de pokemons zijn ontsnapt, druk op refresh</h1>
    }else {
        return (
            <div className="App">
                <button disabled={pagina === 0} onClick={() => setPagina(pagina - 20)}>Vorige</button>
                <button disabled={pagina === 1100} onClick={() => setPagina(pagina + 20)}>Volgende</button>

                {pokemons && pokemons.map((pokemon) => { //.map verwacht een callback functie

                    return <PokemonCard key={pokemon.name} name={pokemon.name}/>
                })}
            </div>
        );
    }
}



export default App;
