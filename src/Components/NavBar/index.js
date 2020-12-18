import React from 'react';
import './index.css';
import {useContext} from 'react';
import {PokedexContext} from "../../PokedexContext";
import logo from "../../assets/pokemon-logo.png";




const NavBar = () => {

    const {setNextApiRequestURL, setPrevApiRequestURL} = useContext(PokedexContext);

    return(
        <>
            <img id="poke-logo" src={logo} alt="Pokemon Logo"/>
            <div className="navbar-container">
                <ul className="navbar">
                    <li>
                        <button
                            type="button"
                            className="nav-button"
                            onClick={() => {
                                setPrevApiRequestURL();
                            }}
                        >
                            &lt;&lt; Back
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="nav-button"
                            onClick={() => {
                                setNextApiRequestURL();
                            }}
                        >
                            Next &gt;&gt;
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )

}

export default NavBar;