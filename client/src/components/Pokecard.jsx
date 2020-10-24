import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Pokecard ({pokemon}) {
    const [card, setCard] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png');

    useEffect(() => {
        
        const fetchData = async () => {
            let response = await axios.get(`${pokemon.url}`);
            console.log(response.data.sprites.front_default);  
            setCard(response.data.sprites.front_default);
            
        };
        
        fetchData();
         
    },[]);

    return (


        <div>
            {pokemon.name}
            <img src={card}/>
        </div>
    );
};