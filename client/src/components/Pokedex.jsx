import React, {useState, useEffect}from 'react';
import axios from 'axios';
import Pokecard from './Pokecard';
import Searchbar from './Searchbar';
import Dropdown from './Dropdown';
import Pokeball from './Pokeball';
import pokeball1 from '../images/pokeball1.png'
import {Link} from "react-router-dom";

export default function Pokedex() {  
    const [searchValue, setSearchValue] = useState('');
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [closed, setClosed] = useState(true)


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
                    <h2 class="loading">Fetching All Pokemons!</h2>
                    <Pokeball />
                </>
            ) : (
                <div className="pokedexPage">

                    <Dropdown value={closed} onChange={(v) => setClosed(v)} />

                    <div className="navSticky">
                        <nav>
                        <Link className='pokeball1' to="/"><img src= {pokeball1} alt="pokeball" /></Link>
                        <h1>Pokédex</h1>
                            <Searchbar handleSearch={handleSearch}/>
                            <button onClick={(e) => setClosed(!closed)}>Types</button>                     
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
