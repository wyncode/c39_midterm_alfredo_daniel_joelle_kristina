import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dropdown(props) {
    console.log(props)
    const [apiDataTypes, setApiDataTypes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get('https://pokeapi.co/api/v2/type');
            setApiDataTypes(response.data.results);
        }
        fetchData();
    }, []);
 
    return (
        <div>
            <div id="dropList" className={props.value ? "closed" : " "}>
                <button className="closeDropList" onClick={(e) => props.onChange(!props.value)}>
                    &times;
                </button>
                <ul>
                    {apiDataTypes && apiDataTypes.map((type, index) => {
                        if (type.name !== 'unknown' && type.name !== 'shadow') {
                            return <li className={type.name} key={index}>
                                        <Link key={type.name} to={`/type/${type.name}`} onClick={(e) => props.onChange(!props.value)}>{type.name}</Link>
                                    </li>
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};
