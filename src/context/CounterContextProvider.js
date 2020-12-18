import React, {createContext, useState} from 'react';

export const CounterContext = createContext({});


function CounterContextProvider({children}){
    const [count, setCount] = useState(0);

    function increment(){
        if((count + 1) * 20 < 1100){
            setCount(count+1);
        }
    }

    function decrement(){
        if(count > 0){
            setCount(count-1);
        }
    }

    const data = {
        count,
        increment,
        decrement,
    }

    return (
        <div className="w-100">
            <CounterContext.Provider value={data}>
                {children}
            </CounterContext.Provider>
        </div>
    );
}

export default CounterContextProvider;