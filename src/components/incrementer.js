import React, {useContext} from 'react';
import { CounterContext } from '../context/CounterContextProvider';

function Incrementer(){
    const {increment, count} = useContext(CounterContext);
    return (
        <button
            onClick={increment}
            type={"button"}
            disabled={count>53}
        >
            Next
        </button>
    );
}

export default Incrementer;