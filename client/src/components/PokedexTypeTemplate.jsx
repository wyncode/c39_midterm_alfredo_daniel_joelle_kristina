import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Pokecard from './Pokecard';

export default function PokedexTypeTemplate() {
    const [search, setSearch] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // setSearch(event.target.elements.searchbar.value);
        console.log(event.target.elements.input.value)
      };

    useEffect(() => {
       
        const fetchData = async () => {
            let response = await axios.get(
                `https://pokeapi.co/api/v2/type/${searchValue}`

            );
                
                setSearch(response.data.pokemon);
            
            
        };
        
        fetchData()},[searchValue])

    return (
        
        <div>
            
            <h1>Types</h1>
            <form>
            {/* <input type="search" placeholder="Search by name or type."/> */}
            <input onChange={event => setSearchValue(event.target.value)} />
            </form> 
            {search && search.map((pokemon,index) => {
               return (<Pokecard key={index} pokemon={pokemon.pokemon}/>);
                
            }) 
            
            }
    
            <Link to="/Pokemon">image</Link>
        </div>
    )
}
