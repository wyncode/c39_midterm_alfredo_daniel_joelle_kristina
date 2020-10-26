import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import Pokecard from './Pokecard';
import Dropdown from './Dropdown.jsx';

export default function PokemonType() {  
    let {type} = useParams();
    const [apiData, setApiData] = useState([]);


    useEffect(() => {
       
        const fetchData = async () => {
            let response = await axios.get(
                `https://pokeapi.co/api/v2/type/${type}`
            );          
            setApiData(response.data.pokemon);           
        };        
        fetchData();
    },[type])


  
    return (
    <div >
        <Link to="/pokedex">Back to All</Link>
        <Dropdown />
        <div className='pokecards'>
            {apiData && apiData.map((pokemon,index) => {
            return (<Pokecard key={index} pokemon={pokemon.pokemon}/>);           
            })}
        </div>
    </div>
    )
}
