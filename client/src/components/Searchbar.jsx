
import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Pokedex() {
    const [search, setSearch] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
       
        const fetchData = async () => {
            let response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${searchValue}`

            ); 
            console.log(response.data);              
            setSearch(response.data);
                       
        };      
    fetchData()},[searchValue])


    return (        
        <div>   
            <input onChange={event => setSearchValue(event.target.value)} />
            <a href="#">
                <h6>{search && search.name}</h6>
            </a>
            <Link to="/Pokemon">image</Link>
        </div>
    )
}
