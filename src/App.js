import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {AddTodo} from "./components/AddTodo/AddTodo";
import {Context, TodoReducer} from "./components/Container";
import {TodoList} from "./components/TodoList";

function App() {
    const [state, dispatch] = React.useReducer(TodoReducer,
        [], arg => ({todoList: arg}))

  return (
    <div className="dashboardContainer">
        <Context.Provider value={{state, dispatch}}>
            <Header/>
            <AddTodo/>
            <TodoList/>
        </Context.Provider>
    </div>
  );
}

export default App;
