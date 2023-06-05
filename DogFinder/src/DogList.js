import React from "react";
import {Link} from "react-router-dom"
import {v4 as uuid} from "uuid"
import Dog from "./Dog";


// Dog list should render DogDetails
function DogList({dogs}) {
    return <div className="DogList">
        <ul>
        {dogs.map(dog => <Link to={`/dogs/${dog.name}`} key={uuid()}><Dog dog={dog} /></Link>)}
        </ul>
    </div>
}

export default DogList;