import React, { useState } from "react"

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
            />
            <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                onChange={inputHandler}
                value={todoName.lastName}
            />
            <button type="button" onClick={todoAddhandler}>Add</button>
            <ul>
                {todoList.map((todo, index) => <li
                    key={`${todo.firstName}_${index}`}>
                    {todo.firstName}-{todo.lastName}
                </li>)}
            </ul>
        </React.Fragment >
    )
}

export default Todo