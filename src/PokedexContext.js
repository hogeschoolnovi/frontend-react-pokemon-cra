import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";


export const PokedexContext = createContext();

function PokedexContextProvider({ children }){

    let [apiRequestURL, setApiRequestURL] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    const [pokedexData, setPokedexData] = useState(null);


    useEffect(() => {
        async function fetchPokedexData() {
            try {
                const result = await axios.get(apiRequestURL)
                console.log(result.data);
                setPokedexData(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchPokedexData();

    }, [apiRequestURL])

    const data = {
        pokedexData,
        apiRequestURL,
        setNextApiRequestURL: () => {setApiRequestURL(pokedexData.next)},
        setPrevApiRequestURL: () => {setApiRequestURL(pokedexData.previous)}
    }

    return(
        <PokedexContext.Provider value={data}>
            {children}
        </PokedexContext.Provider>
    )
}

export default PokedexContextProvider;