import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dropdown(props) {
    const [apiDataTypes, setApiDataTypes] = useState([]);
    const [closed, setClosed] = useState(true);
    

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get('https://pokeapi.co/api/v2/type');
            setApiDataTypes(response.data.results);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div id="dropList" className={closed? "closed" : " "}>
                <button className="closeDropList" onClick={(e) => setClosed(!closed)}>
                    &times;
                </button>
                <ul>
                    {apiDataTypes && apiDataTypes.map((type, index) => {
                        if (type.name !== 'unknown' && type.name !== 'shadow') {
                            return <li className={type.name}>
                                        <Link key={type.name} to={`/type/${type.name}`} onClick={(e) => setClosed(!closed)}>{type.name}</Link>
                                    </li>
                        }
                    })}
                </ul>
            </div>
            <button className="typesButton" onClick={(e) => setClosed(!closed)}><i class="fas fa-bars"></i></button>
        </div>
    );
};
