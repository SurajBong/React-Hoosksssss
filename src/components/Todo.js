import React, { useState } from "react"

const Todo = props => {
    const inputState = useState("");
    const inputHandler = (event) => {
        inputState[1](event.target.value)
    }
    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Todo"
                onChange={inputHandler}
                value={inputState[0]}
            />
            <button type="button">Add</button>
        </React.Fragment >
    )
}

export default Todo