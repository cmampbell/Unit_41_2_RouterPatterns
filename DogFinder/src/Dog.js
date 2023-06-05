import React from "react"
import { v4 as uuid } from "uuid"

const Dog = ({dog}) => {
    return <div className="Dog">
        <h1>{dog.name}</h1>
        <img src={dog.src} alt={dog.name}></img>
        <ul>
            <li>Age: {dog.age} years old</li>
            {dog.facts.map(fact => <li key={uuid()}>{fact}</li>)}
        </ul>
    </div>
}

export default Dog;