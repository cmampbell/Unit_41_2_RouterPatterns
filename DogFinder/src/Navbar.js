import React from "react";
import {NavLink} from "react-router-dom"
import {v4 as uuid} from "uuid"

function NavBar({dogs}) {
    return <div className="Navbar">
        <ul>
            <NavLink to='/'>All dogs</NavLink>
            {dogs.map(dog => <NavLink to={`/dogs/${dog.name}`}key={uuid()}>{dog.name}</NavLink>)}
        </ul>
    </div>
}

export default NavBar;