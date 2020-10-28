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
    const [moves, setMoves] = useState([]);
    const [stats, setStats] = useState([]);
    const [openMoves, setOpenMoves] = useState(false);
    const [openStats, setOpenStats] = useState(false)
    

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
            setMoves(response.data.moves);
            setStats(response.data.stats);
        };
        fetchData();
    },[name]);

    return (
        <div className={"pokepage " + typeClass + " " + typeClass1}>
          
          
          <Link to="/Pokedex">
              <button className="backbutton">
                <i class="fas fa-angle-left">Back</i>
              </button>
          </Link>


          <div className="container">

            <div className="image">
              <img src={image} alt={pokemon.name} />
            </div>


            <div className="info">

              <div className="id">
                <p>#{pokemon && pokemon.id}</p>
              </div>

              <div className="name">
                <p>{pokemon && pokemon.name}</p>
              </div>


              <div className="type">
                {pokemon && types.map((type, index) => {
                  return <p key={index}>{type.type.name}</p>;
                })}
                <span className="typeword">Type</span>
              </div>

             

              <div className="abilities">
                Abilities:
                {pokemon && abilities.map((ability, index) => {
                  return <p>{ability.ability.name}</p>;
                })}
               </div>

              <div className="physical">
                <p> Height: {pokemon && Math.round(pokemon.height*0.328084)} ft</p>
                <p> Weight: {pokemon && Math.round(pokemon.weight*0.220462)} lbs</p>
              </div>


              <button onClick={(e)=>{setOpenMoves(true)}}>Moves</button>
              <div className={openMoves ? "moves open" : "moves"}>
                <button className="closeDropList" onClick={(e) => setOpenMoves(false)}>
                  &times;
                </button>
                <div className='pokemoves'>
                    {pokemon && moves.map((move, index) =>{
                      return <p>{move.move.name}</p>
                    })} 
                </div>            
              </div>
            
              <button onClick={(e)=>{setOpenStats(true)}}>Stats</button>
              <div className={openStats ? "stats open" : "stats"}>
                <button className="closeDropList" onClick={(e) => setOpenStats(false)}>
                  &times;
                </button>
                <div className='pokestats'>
                  {pokemon && stats.map((stat, index) => {
                    return (
                      <div>
                        <p>{stat.stat.name}:{stat.base_stat} pts </p>
                        <p style={{ width: stat.base_stat + "px"}}></p>
                      </div>
                    );
                  })}
                </div>
              </div>


          </div>
        </div>
        </div>
    )
    
}
