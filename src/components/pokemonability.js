import React from 'react';

function Pokemonability(props){

    return (
        <li key={props.keyToUse}>{props.name}</li>
    );
}

export default Pokemonability;