import React from 'react';
import './Buttons.css'

export const Buttons = ({next, previous}) => {

    return (
        <div>

            <button className="Buttons" onClick={previous}>Vorige</button>
            <button className="Buttons" onClick={next}>Volgende</button>

        </div>
    )
}

export default Buttons;