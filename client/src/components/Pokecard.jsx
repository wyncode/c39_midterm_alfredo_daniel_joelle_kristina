import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function Pokecard ({pokemon}) {
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [type1, setType1] = useState('');

    useEffect(() => {
        
        const fetchData = async () => {
            let response = await axios.get(`${pokemon.url}`);  
            setImage(response.data.sprites.other["official-artwork"].front_default);
            setType(response.data.types[0].type.name);
            setType1(response.data.types[1] && response.data.types[1].type.name);
        };
        
        fetchData();
         
    },[pokemon]);

    return (

        <div className={"card "+ type + " " + type1}>
            <Link to={`/pokemon/${pokemon.name}`}>
                <h6>{pokemon.name}</h6>
                <img src={image}/>
            </Link>
        </div>
    );
};

