import React from 'react';
import "./ButtonBar.css"

function ButtonBar({children}) {

    return (
        <div className="buttonbar">{children}</div>
    );
}
export default ButtonBar;