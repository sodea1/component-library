import React, { useEffect, useState } from "react";
import { useFetch } from "../custom_hooks";
import TodoForm from "./TodoForm";
import TodoIndex from "./TodoIndex";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [creating, setCreating] = useState(false);
    const todoURL = 'https://jsonplaceholder.typicode.com/todos';

    useFetch(todoURL, setTodos);

    const toggleCreateForm = (e) => {
        e.preventDefault();
        setCreating(creating ? false : true);
    }

    return (
        <div>
            {!creating ? <button onClick={toggleCreateForm} >Create Todo</button> : ""}
            {creating ? <button onClick={toggleCreateForm} >Cancel</button> : ""}
            {creating ? <TodoForm setTodos={setTodos} todos={todos} setCreating={setCreating} /> : ""}

            <div className='todo-index-container'>
                {todos.length > 0 && <TodoIndex todos={todos} />}
            </div>
        </div>
    )
}

export default TodoApp;