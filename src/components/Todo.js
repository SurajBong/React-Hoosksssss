import React, { useState } from "react"

const Todo = props => {
    const [todoName, setTodoName] = useState("");
    const inputHandler = (event) => {
        setTodoName(event.target.value)
    }
    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Todo"
                onChange={inputHandler}
                value={todoName}
            />
            <button type="button">Add</button>
        </React.Fragment >
    )
}

export default Todo