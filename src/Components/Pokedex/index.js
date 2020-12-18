import React from 'react';
import { useContext } from 'react';
import './index.css';
import Pokemon from "../Pokemon";
import {PokedexContext} from "../../PokedexContext";



const Pokedex = () => {

    const {pokedexData} = useContext(PokedexContext);

        return (
            <>
                <div className="pokedex">
                    {pokedexData && pokedexData.results.map(pokemon => (
                        <Pokemon key={pokemon.name} name={pokemon.name}/>
                    ))}
                </div>
            </>
        )
}




export default Pokedex;

