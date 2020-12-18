import React from 'react';

function Button({children, onClick, pokemonUrl}) {

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={pokemonUrl}
        >
            {children}
        </button>)
}
export default Button;