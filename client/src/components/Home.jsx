import React from 'react'
import {Link} from 'react-router-dom';



export default function Home() {
    return (
        <div>
            <Link to="/Pokedex">
                <button>HARDCOREBUUUUUTTTON</button>
                <div className="box child-to-body">
                <img src="pokeBannerGimp.png" width="250" alt="" />
                <div className="poke_box">
                <div className="pokeball">
                <div className="pokeball__button"></div>
                </div>   
                </div>
                <p className="has-text-centered" ></p>
                </div>
            </Link>
        </div>
    )
}
