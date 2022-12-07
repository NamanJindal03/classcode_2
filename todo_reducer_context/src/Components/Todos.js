import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';
import {REMOVE_TODO} from "../context/action.types"


function Todos() {
    const {todos, dispatch} = useContext(TodoContext);
    console.log(todos)
    const [obj, setObj] =  useState({name: 'naman', age: 20, job: 'teach'})/* 100 properties */
    /* todos ->  []*/
  return (
    <>
        {todos.map((todosObj)=>{
            return (
                <li key={todosObj.id}>
                    {todosObj.todoString} 
                    <button onClick={()=>{
                        dispatch({
                            type: REMOVE_TODO,
                            payload: todosObj.id
                        })
                    }}>Remove</button>
                </li>
            )
        })} 
        {Object.keys(obj).map((objKey)=>{
            return (
                <>
                    <h1>{objKey} : {obj[objKey]}</h1>
                    
                </>
            )
        })}
    </>
  )
}

export default Todos

/* 
    [todos, dispatch] = state
    useContext -> Central State Store (TodoContext) -> Provider(values )
    -> State (APP) 

*/