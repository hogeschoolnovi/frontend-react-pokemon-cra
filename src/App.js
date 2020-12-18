import React from 'react';
import './App.css';
import Pokedex from './Components/Pokedex/index'
import NavBar from "./Components/NavBar";
import PokedexContextProvider from "./PokedexContext";




function App() {



  return (
      <>
          <PokedexContextProvider>
              <body>
                  <NavBar/>
                  <Pokedex/>
              </body>
          </PokedexContextProvider>
      </>
  );
}

export default App;
