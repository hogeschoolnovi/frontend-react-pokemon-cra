import React,{useState} from 'react';
import './App.css';
import PokemonList from "./components/pokemonList/PokemonList";
import ButtonBar from "./components/buttonBar/ButtonBar";
import logo from "./assets/Pokemon-Logo-PNG4.png";
import Button from "./components/button/Button";

function App() {
    const [upOrDown, setUpOrDown] = useState(0);

    function previous(){
        if (upOrDown > 0){
            setUpOrDown(-1)
        }
        else {
            setUpOrDown(upOrDown - 1);
        }
    }

    function next() {
        if (upOrDown < 0) {
            setUpOrDown(1)
        } else {
            setUpOrDown(upOrDown + 1);
        }
    }

  return (
    <div>
        <img src={logo} alt="Pokemon Logo"/>
        <ButtonBar>
            <Button onClick={previous}>Vorige</Button>
            <Button onClick={next}>Volgende</Button>
        </ButtonBar>
            <PokemonList previousOrNext={upOrDown}/>
    </div>
  );
}

export default App;
