import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    return (
        <div>
            <h1>Home Component</h1>
            <Link to="/Pokedex">Pokedex</Link>
        </div>
    )
}
