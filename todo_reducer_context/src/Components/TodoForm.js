import React, {useState, useContext} from 'react'
import {TodoContext} from "../context/TodoContext";
import {ADD_TODO} from "../context/action.types"
import { v4 } from 'uuid';

function TodoForm() {
    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext)
    const handleSubmit = e =>{
        e.preventDefault();
        if(todoString.trim() === ""){
            return alert('Todo needs some value')
        } 

        const todo = {
            todoString, /* why no key value pair? */
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("")
        /*  
            body?.req?.name ;
        */
        /* in es6 if key and value name is same then we can just pass it once */

    }
  
    return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={todoString}  
            onChange= {e => setTodoString(e.target.value)}
        />
    </form>
  )
}

export default TodoForm