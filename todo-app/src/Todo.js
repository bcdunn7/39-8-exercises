import React from 'react';

const Todo = ({id, name, remove}) => {

    const handleClick = (e) => {
        remove(e.target.parentElement.id)
    }

    return (
        <div id={id}>{name} <button onClick={handleClick}>X</button></div>
    )
}

export default Todo;