import React, {useState, useEffect}from 'react';
import axios from 'axios';
import Pokecard from './Pokecard';
import Searchbar from './Searchbar';
import Dropdown from './Dropdown';
import Pokeball from './Pokeball';

export default function Pokedex() {  
    const [searchValue, setSearchValue] = useState('');
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
       setLoading(true)
        const fetchData = async () => {
            let response = await axios.get(
                'https://pokeapi.co/api/v2/pokemon?limit=151'
            )       
            setApiData(response.data.results);   
            setTimeout(() => {
                setLoading(false)
            }, 2000);        
        }        
        fetchData()

    },[])

    const handleSearch = (searchTerm) => {
        setSearchValue(searchTerm)
    }
    const filteredPokemon = apiData && apiData.filter(pokemon => pokemon.name.includes(searchValue));
  
    return (
        <>
            {loading ? (
                <>
                    <h2 class="loading">Catching All Pokemón!</h2>
                    <Pokeball />
                </>
            ) : (
                <div className="pokedexPage">
                    <Dropdown />
                    <div className="navSticky">
                        <nav>
                            <h1>Pokédex</h1>
                            <Searchbar handleSearch={handleSearch}/>                     
                        </nav>
                    </div>
                <div className='pokecards'>
                    {apiData && filteredPokemon.map((pokemon,index) => {
                    return (<Pokecard key={index} pokemon={pokemon}/>);           
                    })}
                </div>
                </div>
        )}   
        </>
    )
}
