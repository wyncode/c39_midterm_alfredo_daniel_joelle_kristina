import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dropdown() {
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
            <div id="dropList" className={closed ? "closed" : " "}>
                <button className="closeDropList" onClick={(e) => setClosed(!closed)}>
                    &times;
                </button>
                {apiDataTypes && apiDataTypes.map((type, index) => {
                    if (type.name !== 'unknown' && type.name !== 'shadow') {
                        return <Link key={type.name} to={`/type/${type.name}`} className={type.name}>{type.name}</Link>;
                    }
                })}
            </div>
            <button onClick={(e) => setClosed(!closed)}>Types</button>
        </div>
    );
};
