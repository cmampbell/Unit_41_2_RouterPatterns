import React from "react";
import { useParams } from "react-router-dom"
import Dog from './Dog.js'

function DogDetails({ dogs }) {
    const { name } = useParams();

    const dog = dogs.find(dog => dog.name === name)

    return (
        <div className="DogDetails">
            <Dog dog={dog} />
        </div>
    )

}

export default DogDetails;