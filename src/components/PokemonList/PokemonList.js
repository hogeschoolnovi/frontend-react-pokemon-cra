import React from 'react';
import PokemonCard from "../PokemonCard"
import "./PokemonList.css"

function PokemonList({setStartAndEndPoint}){

    let pokemonList = [];
    let startPoint = setStartAndEndPoint;
    if(startPoint === 881) {
        for (let i = 0; i < 18; i++) {
            pokemonList[i] = startPoint;
            startPoint++;
        }
    }
    else
        {
        for (let i = 0; i < 20; i++) {
            pokemonList[i] = startPoint;
            startPoint++;
        }
    }

    //console.log(pokemonList);
    return<div id="wrapper">
        {pokemonList && pokemonList.map((name) =>
        <PokemonCard key={name} pokemonName={name}/>)}
    </div>;


}

export default PokemonList;