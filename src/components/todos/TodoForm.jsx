import React, { useState } from "react";

const TodoForm = ({ todos, setTodos, setCreating }) => {
    const [description, setDesc] = useState("");

    const handleDesc = (e) => {
        e.preventDefault();
        let nextDesc = e.target.value;
        setDesc(nextDesc);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!e.target.description) return;
        // add the todo info to the index
        let stat;
        e.target.status.forEach((input, i) => {
            if (input.checked && i === 0) {
                stat = "Incomplete";
            } else if (input.checked && i === 1) {
                stat = "Complete";
            } else {
                return;
            }
        })

        let nextTodo = {
            title: e.target.description.value,
            status: stat
        }

        setTodos([...todos, nextTodo]);
        setCreating(false);
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <label htmlFor="description">Description:
                <input onChange={handleDesc} type="text" name="description" value={description} />
            </label>
            <label htmlFor="incomplete">Incomplete: 
                <input type="radio" name="status" />
            </label>
            <label htmlFor="complete">Complete: 
                <input type="radio" name="status" />
            </label>
            <input type="submit" />
        </form>
    )
}

export default TodoForm;