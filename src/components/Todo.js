import React, { useState } from "react"

import classes from "./Todo.module.css"

const Todo = props => {
    const [todoName, setTodoName] = useState({ firstName: "", lastName: "" });
    const [todoList, setTodoList] = useState([]);
    const inputHandler = (event) => {
        let { id, value } = event.target
        setTodoName({ ...todoName, [id]: value })
    }
    const todoAddhandler = () => {
        setTodoList(todoList.concat(todoName))
    }
    return (
        <React.Fragment>
            <input
                type="text"
                id="firstName"
                placeholder="First Name"
                onChange={inputHandler}
                value={todoName.firstName}
                className={classes.todoInput}
            />
            <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                onChange={inputHandler}
                value={todoName.lastName}
                className={classes.todoInput}
            />
            <button type="button" onClick={todoAddhandler}>Add</button>
            <ul>
                {todoList.map((todo, index) =>
                    <li className={classes.todos}
                        key={`${todo.firstName}_${index}`}
                    >
                        {todo.firstName}-{todo.lastName}
                    </li>)}
            </ul>
        </React.Fragment >
    )
}

export default Todo