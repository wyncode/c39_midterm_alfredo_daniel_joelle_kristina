import React, {useState} from 'react';


export default function Dropdown () {

    const [open, setOpen] = useState(false);

    const handleOpening = (e) => {
        e.preventDefault();
        alert('open');
    }


    return (
        <div>
            <div id="myNav" className="overlay">
                <a href="#" className="closebtn">&times;</a>
                <div class="overlay-content">
                    <a href="#">Fire</a>
                    <a href="#">Grass</a>
                    <a href="#">Water</a>
                    <a href="#">Ghost</a>
                </div>
            </div>
            <button>Types</button>
        </div>
    )
}
