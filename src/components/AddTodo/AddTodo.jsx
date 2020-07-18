import {Button} from "react-bootstrap"
import React from "react";
import {ACTION_TYPES, useContext} from "../Container";

export const AddTodo = () => {
    const { dispatch } = useContext()
    const [text, setText] = React.useState("")

    const changeText = event => {
        setText(event.target.value)
    }

    const addTodo = () => {
        dispatch({type: ACTION_TYPES.ADD_TODO, payload: text})
        setText("")
    }

    return (
        <div className="p-5">
            <div className="form-group">
                <label className="form-check-label">{"Add Todo"}</label>
                <input value={text} className="form-control" placeholder="Enter A Todo" onChange={changeText} />
            </div>
            <Button onClick={addTodo}
                    disabled={text.length === 0}>Add</Button>
        </div>
)
}