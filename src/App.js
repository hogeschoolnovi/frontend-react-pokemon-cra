import React,{useState} from 'react';
import './App.css';
import PokemonList from "./components/PokemonList/PokemonList";
import ButtonBar from "./components/ButtonBar/ButtonBar";
import logo from "./assets/Pokemon-Logo-PNG4.png"

function App() {
   // const [startPoint, setStartPoint]  = useState(1);
    const [upOrDown, setUpOrDown] = useState(1);
    console.log("UoD App 1-->", upOrDown)


  return (
    <div>
        <img src={logo} alt="Pokemon Logo"/>
        <ButtonBar changeStartPoint={setUpOrDown}/>
        <PokemonList setStartAndEndPoint={upOrDown}/>
    </div>
  );
}

export default App;
