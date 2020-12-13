import React, {useState} from 'react';
import "./ButtonBar.css"

function ButtonBar({changeStartPoint}) {
    const [upOrDown, setUpOrDown] = useState( 1);
    let isDisabled = false;
    console.log("UoD BB 2",upOrDown)
    function changeStartPointUp() {
        if (upOrDown === 881) {
            changeStartPoint(881);
            isDisabled = true;
        } else {
            console.log("uoD--> 1", upOrDown)
            setUpOrDown(upOrDown + 20);
            changeStartPoint(upOrDown + 20);
            console.log("uoD--> 2", upOrDown)
            isDisabled = false;
        }
    }
    function changeStartPointDown() {
        if (upOrDown === 1){
            changeStartPoint(1);
            isDisabled = true;
            console.log("click", isDisabled);
        }
        else {
            setUpOrDown(upOrDown - 20);
            changeStartPoint(upOrDown - 20);
            isDisabled = false;
            console.log(" false",upOrDown)
            console.log("click", isDisabled);
        }
    }

    return (
        <div className="buttonbar">
            <button type="button" disabled={isDisabled} onClick={changeStartPointDown}>Vorige</button>
            <button type="button" disabled={isDisabled} onClick={changeStartPointUp}>Volgende</button>
        </div>)
}
export default ButtonBar;