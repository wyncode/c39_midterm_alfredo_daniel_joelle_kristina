
import React from 'react';

export default function Pokedex({handleSearch}) {
    
  
    return (        
        <div>   
            <input onChange={(e) => handleSearch(e.target.value)} placeholder="Search by Name"/>
        </div>
    )
}
