import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Pokemon() {
    const [pokemon, setPokemon] = useState({});
    let { name } = useParams();
    

    useEffect(() => {
        // console.log('im running')
        const fetchData = async () => {
            let response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`

            );
            
            setPokemon(response.data);
        };
        
        fetchData();
         
    },[name]);

    
    
    return (
        <div>
            <h1>{pokemon && pokemon.name}</h1>
            <h3>Weight: {pokemon && pokemon.weight} kg</h3>
            <h3>Height: {pokemon && pokemon.height} dm</h3>
        </div>
    )
    
}
