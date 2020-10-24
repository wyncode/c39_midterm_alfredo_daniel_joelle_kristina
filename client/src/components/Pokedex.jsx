import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Pokecard from './Pokecard';

export default function Pokedex() {
    const [search, setSearch] = useState([]);
    
    useEffect(() => {
       
        const fetchData = async () => {
            let response = await axios.get(
                `https://pokeapi.co/api/v2/type/grass/`

            );
                
                setSearch(response.data.pokemon);
            
            
        };
        
        fetchData()},[])

    return (
        
        <div>
            <h1>Pokedex Component</h1>
            <input type="search" placeholder="Search...."/>
            {search && search.map((pokemon,index) => {
               return (<Pokecard key={index} pokemon={pokemon.pokemon}/>);
                
            }) 
            
            }
    
            <Link to="/Pokemon">image</Link>
        </div>
    )
}
