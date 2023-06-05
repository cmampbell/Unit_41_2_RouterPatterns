import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'

const Color = ({ findColor }) => {
    const { name } = useParams()

    const color = findColor(name)

    return color ? 
        <div className='Color' style={{ backgroundColor: color.backgroundColor }}>
            <h1>{name}</h1>
            <Link to='/colors'>Home</Link>
        </div> 
        : 
        <Navigate to="/colors" replace={true}/>
}

export default Color;