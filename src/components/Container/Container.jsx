import * as React from "react";

export const Context = React.createContext(undefined)

export const useContext = () => React.useContext(Context)

export const ACTION_TYPES = {
    ADD_TODO: "add-todo",
    REMOVE_TODO: "remove-todo",
    CLEAR_TODO: "clear-todo",
    SEARCH_TODO: "search-todo",
    DISABLE_SEARCH: "disable-search"
}

export const TodoReducer = (state, action) => {
    let newState = Object.assign({}, state)
    newState.searchMode = false
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            newState.todoList = [...newState.todoList, action.payload]
            break
        case ACTION_TYPES.REMOVE_TODO:
            const arr = [...newState.todoList]
            arr.splice(action.index, 1)
            newState.todoList = arr
            break
        case ACTION_TYPES.CLEAR_TODO:
            newState.todoList = []
            break
        case ACTION_TYPES.SEARCH_TODO:
            newState.filteredList = newState.todoList.filter(todo => todo === action.payload)
            newState.searchMode = true
            break
        case ACTION_TYPES.DISABLE_SEARCH:
            break;
        default:
            throw new Error(`${action.type} is not a defined action`)
    }
    return newState
}