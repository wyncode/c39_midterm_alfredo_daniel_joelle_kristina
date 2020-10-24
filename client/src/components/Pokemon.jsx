import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Pokemon() {
    const [pokemon, setPokemon] = useState({
        id: 1,
        name: "bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    });

    useEffect(() => {
        // console.log('im running')
        const fetchData = async () => {
            let response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`

            );
            console.log(response.data.forms[0].name);  
            // setPokemon(response.data.forms[0].name);
            
        };
        
        fetchData();
         
    },[]);

    return (
        <div>
            <h1>Pokemon Profile Component</h1>
        </div>
    )
}
