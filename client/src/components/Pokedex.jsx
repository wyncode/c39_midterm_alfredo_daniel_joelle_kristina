import React, {useState, useEffect}from 'react';
import axios from 'axios';
import Pokecard from './Pokecard';
import Searchbar from './Searchbar';
import Dropdown from './Dropdown.jsx';

export default function Pokedex() {  
    const [searchValue, setSearchValue] = useState('');
    const [apiData, setApiData] = useState([]);


    useEffect(() => {
       
        const fetchData = async () => {
            let response = await axios.get(
                'https://pokeapi.co/api/v2/pokemon?limit=879'
            );          
            setApiData(response.data.results);           
        };        
        fetchData();
    },[])

    const handleSearch = (searchTerm) => {
        setSearchValue(searchTerm)
    }
    const filteredPokemon = apiData && apiData.filter(pokemon => pokemon.name.includes(searchValue));
  
    return (
    <div >
        <h1>Pokédex</h1>
        <Searchbar handleSearch={handleSearch}/>
        <Dropdown />
        <div className='pokecards'>
            {apiData && filteredPokemon.map((pokemon,index) => {
            return (<Pokecard key={index} pokemon={pokemon}/>);           
            })}
        </div>
    </div>
    )
}
