import React from "react";
import {Button, ListGroup} from "react-bootstrap"
import {ACTION_TYPES, useContext} from "../Container";

export const TodoList = () => {
    const {state, dispatch} = useContext()

    const todos = state.searchMode ? state.filteredList : state.todoList

    const clearTodos = () => {
        dispatch({type: ACTION_TYPES.CLEAR_TODO})
    }

    const removeTodo = (index) => {
        dispatch({type: ACTION_TYPES.REMOVE_TODO, index})
    }

    const renderList = () => {
        if (todos.length === 0) {
            return (
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <span>{"No Todos"}</span>
                </div>
            )
        }
        return (
            <div className="border-primary border p-2">
                <Button className="mb-3" variant="danger" onClick={clearTodos}>{"clear"}</Button>
                <ListGroup>
                    {todos.map((value, index) => (
                        <ListGroup.Item key={`${value}-${index}`}>
                            <div className="d-flex flex-row justify-content-between">
                                <span>{`${index+1}. ${value}`}</span>
                                <Button onClick={() => removeTodo(index)}>Delete</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        )
    }

    return (
        <div className={"w-100 p-5"}>
            {renderList()}
        </div>
    )
}