import React, { useState } from "react"

const Todo = props => {
    const [todoName, setTodoName] = useState("");
    const [todoList, setTodoList] = useState([]);
    const inputHandler = (event) => {
        setTodoName(event.target.value)
    }
    const todoAddhandler = () => {
        setTodoList(todoList.concat(todoName))
    }
    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Todo"
                onChange={inputHandler}
                value={todoName}
            />
            <button type="button" onClick={todoAddhandler}>Add</button>
            <ul>
                {todoList.map((todo, index) => <li key={`${todo}_${index}`}>{todo}</li>)}
            </ul>
        </React.Fragment >
    )
}

export default Todo