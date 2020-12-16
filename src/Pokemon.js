import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Pokemon( { url }) {

    const [pm, setPm] = useState(null);

    useEffect(() => {

            async function fetchData() {
                try {
                    const result = await axios.get(url);
                    console.log(result.data);
                    setPm(result.data);

                } catch (e) {
                    console.error(e);
                }
            }

            fetchData();

        }

        , [url]);

    return (
        <div>

            {pm &&
            <>
                <h1>{pm.name}</h1>

                <p className="image"><img
                    src={pm.sprites.front_default}
                    alt={`Afbeelding`}
                /></p>

                <h4>Moves: {pm.moves.length}</h4>
                <h4>Weight: {pm.weight}</h4>

                <h4>Abilities:</h4>
                <ul>
                    {pm.abilities.map(( {ability} ) => (
                        <li key={ability.name}>{ability.name}</li>
                    ))}
                </ul>

            </>
            }
        </div>
    );
}

export default Pokemon;
