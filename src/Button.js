import React from 'react';

function Button( { previousUrl, nextUrl, setUrl }) {

    return (
        <div>

            <button type="button" disabled={!previousUrl} onClick={() => setUrl(previousUrl)}>
                Terug
            </button>

            <button type="button" disabled={!nextUrl} onClick={() => setUrl(nextUrl)}>
                Vooruit
            </button>

        </div>
    );
}

export default Button;
