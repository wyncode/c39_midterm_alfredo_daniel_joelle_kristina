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
                <Link to="/type/fire" className="fire">Fire</Link>
                <Link to="/type/water" className="water">Water</Link>
                <Link to="/type/ground" className="ground">Ground</Link>
                <Link to="/type/grass" className="grass">Grass</Link>
                <Link to="/type/poison" className="poison">Poison</Link>
                <Link to="/type/rock" className="rock">Rock</Link>
                <Link to="/type/normal" className="normal">Normal</Link>
                <Link to="/type/bug" className="bug">Bug</Link>
                <Link to="/type/steel" className="steel">Steel</Link>
            </div>
            <button onClick={(e) => setClosed(!closed)}>Types</button>
        </div>
    );
};
