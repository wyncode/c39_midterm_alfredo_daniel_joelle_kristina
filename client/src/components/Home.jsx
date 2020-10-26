import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.png'

export default function Home() {
    return (
    

        <div id="HomeBackground" >
            <img className= "logo" src= {Logo} alt=""></img>
            <Link to="/Pokedex">
            <div className="poke_box">
                <div className="pokeball">
                    <div className="pokeball__button"></div>
                </div>   
            </div>
            </Link> 
            <h1> Hardcore Pokedex </h1>
        </div>
    )
}
