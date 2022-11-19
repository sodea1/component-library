import React, { useState } from "react";
import Todo from './Todo';
import './TodoIndex.scss';

const TodoIndex = ({ todos }) => {
    const [filter, setFilter] = useState("All");

    const changeFilter = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    }

    return (
        <div className="todo-index-container">
            <select onChange={changeFilter}>
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
            </select>
            {todos.map((todo, i) => {
                if (filter === "Incomplete" && !todo.completed) {
                    return <Todo key={i} title={todo.title} status={todo.completed} />
                } else if (filter === "Complete" && todo.completed) {
                    return <Todo key={i} title={todo.title} status={todo.completed} />
                } else if (filter === "All") {
                    return <Todo key={i} title={todo.title} status={todo.completed} />
                }
            })}
        </div>
    )
}

export default TodoIndex;