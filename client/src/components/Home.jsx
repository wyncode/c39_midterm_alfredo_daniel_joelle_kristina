import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.png'
import Pokeball from './Pokeball';

export default function Home() {
    return (
    

        <div id="HomeBackground" >
            <img className= "logo" src= {Logo} alt=""></img>
            <Link to="/Pokedex">
                <Pokeball />
            </Link> 
            <h1> Hardcore Pokedex </h1>
        </div>
    )
}
