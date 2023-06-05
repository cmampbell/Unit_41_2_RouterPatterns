import React, {useState}  from "react"
import {useNavigate} from "react-router-dom"

const NewColorForm = ({addColors}) => {
    const navigate = useNavigate()
    
    const INITIAL_STATE = {
        name: '',
        backgroundColor: '#000000'
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(() => ({
            ...formData, [name]: value
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addColors(formData);
        navigate('/colors')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder=""
                onChange={handleChange}
                value={formData.name}
            />
            <label htmlFor="backgroundColor">Color:</label>
            <input
                type="color"
                name="backgroundColor"
                id="backgroundColor"
                onChange={handleChange}
                value={formData.backgroundColor}
            />
            <button>Add Color</button>
        </form>
    )
}

export default NewColorForm;