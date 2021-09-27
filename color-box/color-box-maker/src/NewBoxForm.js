import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {

    const INITIAL_STATE = {
        color: "",
        width: "",
        height: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { color, width, height} = formData;
        addBox({color, width, height})
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Background Color:</label>
            <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <label htmlFor="width">Width:</label>
            <input
                type="text"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height:</label>
            <input
                type="text"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <button>Add!</button>
        </form>
    )
}

export default NewBoxForm;