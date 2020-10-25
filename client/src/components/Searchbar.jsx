
import React, {useState}from 'react';

export default function Pokedex({handleSearch}) {
    const [search, setSearch] = useState([]);
  
    return (        
        <div>   
            <input onChange={(e) => handleSearch(e.target.value)} placeholder="Search by Name"/>
            <a href="#">
                <h6>{search && search.name}</h6>
            </a>
        </div>
    )
}
