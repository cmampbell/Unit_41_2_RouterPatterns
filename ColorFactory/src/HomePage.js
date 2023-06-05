import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import './HomePage.css'

const HomePage = ({ colors }) => {
    return <div className='HomePage'>
        <div className='HomePage-NewColorDiv'>
            <Link to="/colors/new" className='HomePage-NewColorLink'>Add a color</Link>
        </div>
        <div className='HomePage-ColorsDiv'>
            {colors.map(color => <Link
                to={`/colors/${color.name}`}
                key={uuid()}>
                {color.name}
            </Link>)}
        </div>
    </div>
}

export default HomePage;