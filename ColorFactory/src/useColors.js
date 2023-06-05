import { useState } from 'react'

const useColors = () => {
    const [colors, setColors] = useState([])

    const addColors = (color) => {
        setColors(()=> [...colors, color])
    }

    const findColor = (name) => {
        return colors.find((color) => color.name === name)
    }

    return {colors, addColors, findColor}
}

export default useColors;