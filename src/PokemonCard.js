import React, { useState, useEffect } from 'react';
import axios from "axios";
import './PokemonCard.css'


function PokemonCard({url}) {
    const [onePokemonData, setOnePokemonData] = useState(null);


    useEffect(() => {
        async function fetchOnePokemon() {
            try {
                const result = await axios.get(url);
                setOnePokemonData(result.data);
            } catch (e) {
                console.error(e)
            }
        }
        if (url) {
            fetchOnePokemon();
        }
    }, [url]);

    console.log(onePokemonData)
    return (
        <>

            {onePokemonData &&
            <span className="pokemonCard">
                <h1>{onePokemonData.name}</h1>
                <img src={onePokemonData.sprites.front_default}/>
                <p>Moves: {onePokemonData.moves.length}</p>
                <p>Weight: {onePokemonData.weight}</p>
                <ul className="abilities">
                    <h3>Abilities</h3>
                    {onePokemonData.abilities && onePokemonData.abilities.map((ability) => {
                        return (
                            <article className="ability" key={ability.slot}>
                                <li>{ability.ability.name}</li>
                            </article>
                        )
                    })}
                </ul>
                </span>
            }
        </>

    )
}
    export default PokemonCard;


