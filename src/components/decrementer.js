import React, {useContext} from 'react';
import { CounterContext } from '../context/CounterContextProvider';

function Decrementer(){
    const {decrement, count} = useContext(CounterContext);

    return (
        <button
            onClick={decrement}
            type={"button"}
            disabled={count < 1}
        >
            Previous
        </button>
    );
}

export default Decrementer;