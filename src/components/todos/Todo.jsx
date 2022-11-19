import React, { useState } from "react";
import './Todo.scss';

const Todo = ({ title, status }) => {
    const [stat, setStat] = useState(status);

    const toggleStatus = (e) => {
        e.preventDefault();
        setStat(stat ? false : true);
    }

    return (
        <div className="todo-item">
            <span>{title}</span>
            <button onClick={toggleStatus}>{stat ? "Complete" : "Incomplete"}</button>
        </div>
    )
}

export default Todo;