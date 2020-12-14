import React, { useState, useEffect } from 'react';
import axios from "axios";
import './PokemonCard.css';

function PokemonCard({endPointPokemonData}){

    const [pokemonInfo, setPokemonInfo] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                const result = await axios.get(endPointPokemonData);
                setPokemonInfo(result.data);
            }catch (e) {
                console.error(e);
            }
        }
        fetchData();
    },[])

    return(
        <div className="pokemon-card-container">
            <div className="pokemon-card">
                {pokemonInfo &&
                    <div>
                        <h2>{pokemonInfo.name}</h2>
                        <img src={pokemonInfo.sprites.front_default} alt="pokemon"/>
                        <h3>moves: {pokemonInfo.moves.length}</h3>
                        <h3>weight: {pokemonInfo.weight}</h3>
                        <h3 className="abilities">Abilities:</h3>
                        <ul>
                            {pokemonInfo.abilities.map((abilityItem) => {
                                    return (<li key={abilityItem.slot}>{abilityItem.ability.name}</li>)
                                }
                            )}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default PokemonCard;