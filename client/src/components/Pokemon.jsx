import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function Pokemon() {
    let { name } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [types, setTypes] = useState([]);
    const [image, setImage] = useState("");
    const [abilities, setAbilities] = useState([]);
    const [typeClass, setTypeClass] = useState(["pokemon"]);
    const [typeClass1, setTypeClass1] = useState("");
    

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            setPokemon(response.data);
            setTypes(response.data.types);
            setImage(response.data.sprites.other["official-artwork"].front_default);
            setAbilities(response.data.abilities);
            setTypeClass(response.data.types[0].type.name);
            setTypeClass1(response.data.types[1] && response.data.types[1].type.name);
        };
        fetchData();
    },[name]);

    return (
        <div className={"pokemon " + typeClass + " " + typeClass1}>
        <Link to="/Pokedex">
          <button>Back</button>
        </Link>
        <div className="card">
          <div className="image">
            <img src={image} alt={pokemon.name} />
          </div>
          <div className="info">
            <p>Name: {pokemon && pokemon.name}</p>
            <p>ID: {pokemon && pokemon.id}</p>
            <p> Height: {pokemon && Math.round(pokemon.height*0.328084)} ft</p>
            <p> Weight: {pokemon && Math.round(pokemon.weight*0.220462)} lbs</p>
            <div>
              Type:
              {pokemon &&
                types.map((type, index) => {
                  return <p key={index}>{type.type.name}</p>;
                })}
            </div>
            <div>
              Abilities:
              {pokemon &&
                abilities.map((ability, index) => {
                  return <p>{ability.ability.name}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    )
    
}
