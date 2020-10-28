
import React from 'react';

export default function Pokedex({handleSearch}) {
    
    return (<input className="searchBar" onChange={(e) => handleSearch(e.target.value)} placeholder="Search by Name"/>)

}
