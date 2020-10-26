import React, {useState} from 'react';
import { Link } from "react-router-dom";

export default function Dropdown() {

    const [closed, setClosed] = useState(true);

    return (
        <div>
            <div id="dropList" className={closed ? "closed" : " "}>
                <button className="closeDropList" onClick={(e) => setClosed(!closed)}>
                    &times;
                </button>
                <Link to="/type/bug" className="bug">Bug</Link>
                <Link to="/type/dark" className="dark">Dark</Link>
                <Link to="/type/dragon" className="dragon">Dragon</Link>
                <Link to="/type/electric" className="electric">Electric</Link>
                <Link to="/type/fairy" className="fairy">Fairy</Link>
                <Link to="/type/fighting" className="fighting">Fighting</Link>
                <Link to="/type/fire" className="fire">Fire</Link>
                <Link to="/type/flying" className="flying">Flying</Link>
                <Link to="/type/ghost" className="ghost">Ghost</Link>
                <Link to="/type/grass" className="grass">Grass</Link>
                <Link to="/type/ground" className="ground">Ground</Link>
                <Link to="/type/ice" className="ice">Ice</Link>
                <Link to="/type/normal" className="normal">Normal</Link>
                <Link to="/type/poison" className="poison">Poison</Link>
                <Link to="/type/psychic" className="psychic">Psychic</Link>
                <Link to="/type/rock" className="rock">Rock</Link>         
                <Link to="/type/steel" className="steel">Steel</Link>
                <Link to="/type/water" className="water">Water</Link>
            </div>
            <button onClick={(e) => setClosed(!closed)}>Types</button>
        </div>
    );
};
