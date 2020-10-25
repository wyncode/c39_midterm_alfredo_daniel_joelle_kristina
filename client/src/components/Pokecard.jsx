import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Pokecard ({pokemon}) {
    const [card, setCard] = useState('');
    const [name, setName] = useState('')

    useEffect(() => {
        
        const fetchData = async () => {
            let response = await axios.get(`${pokemon}`);  
            setCard(response.data.sprites.front_default);
            setName(response.data.forms[0].name);
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

// import React from 'react';
// import Card from 'react-bootstrap/Card';

// const Pokecard = () => {
//   return (
//     <Card style={{ width: 200, margin: 10 }}>
//       <a href={null}>
//         <Card.Img src={null} />
//       </a>
//       <Card.Body>
//         <Card.Title>name</Card.Title>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Recipe;