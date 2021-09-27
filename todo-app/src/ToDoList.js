import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'

const ToDoList = () => {

    const INITIAL_STATE = []
    const [todos, setTodos] = useState(INITIAL_STATE)

    const remove = (id) => {
        setTodos(todos.filter(t => t.id !== id))
    }

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}])
    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>
            <h2>Todos:</h2>
            <ul>
                {todos.map(todo => (
                    <Todo 
                        id={todo.id}
                        key={todo.id} 
                        name={todo.name}
                        remove={remove}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList