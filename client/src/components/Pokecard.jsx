import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Pokecard ({pokemon}) {
    const [card, setCard] = useState('');
    const [name, setName] = useState('');
    // const [type, setType] = useState('');

    useEffect(() => {
        
        const fetchData = async () => {
            let response = await axios.get(`${pokemon}`);  
            setCard(response.data.sprites.front_default);
            setName(response.data.forms[0].name);
            // setType(response.data.types[0].type.name);
        };
        
        fetchData();
         
    },[]);

    return (
        <a href={`/pokemon/${name}`}>
            <h6>{name}</h6>
            <img src={card}/>
        </a>
    );
};

