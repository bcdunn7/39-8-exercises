import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {

    const INITIAL_STATE = {
        name: ""
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
        const { name } = formData;
        addTodo({ name })
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">New Todo:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <button>Add!</button>
        </form>
    )
}

export default NewTodoForm;