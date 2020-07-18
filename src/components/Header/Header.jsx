import React from "react";
import {Navbar} from "react-bootstrap"
import "./Styles.css"
import Button from "react-bootstrap/Button";
import {ACTION_TYPES, useContext} from "../Container";

export const Header = () => {
    const [text, setText] = React.useState("")
    const {dispatch} = useContext()

    React.useEffect(() => {
        if (text.length === 0) {
            dispatch({type: ACTION_TYPES.DISABLE_SEARCH})
        }
    }, [text, dispatch])

    const searchTodo = () => {
        dispatch({type: ACTION_TYPES.SEARCH_TODO, payload: text})
    }

    const onChangeTodo = (event) => {
        setText(event.target.value)

    }

    return (
        <>
            <Navbar bg="light" >
                <Navbar.Brand href="#home">
                    <img
                        src="/logo512.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Brand>{"Todo APP"}</Navbar.Brand>

                <div className="flex-row d-flex">
                    <input placeholder={"Search Todo"}
                           onSubmit={searchTodo}
                           onChange={onChangeTodo}
                           value={text}
                           className={"searchInput form-control"}/>

                    <Button
                        className={"searchBtn"}
                        onClick={searchTodo}
                        disabled={text.length === 0}
                    >
                        {"Search"}
                    </Button>
                </div>
            </Navbar>
        </>
    )
}