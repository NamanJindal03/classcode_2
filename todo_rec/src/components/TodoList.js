import React from 'react'
import '../style/style.css'
function TodoList({todoArr, markComplete, deleteTodo}) {

  return (
    <ul>
        {
            todoArr.map((todoObj, index)=>{
                return (
                    <>
                        <li key={todoObj.id} className={`${todoObj.isComplete ? 'dec' : '' }`}>
                            {todoObj.name} <button onClick={()=>{deleteTodo(todoObj.id)}}>Delete</button>
                            <button onClick={()=>{markComplete(todoObj.id)}}>Complete</button>
                            {/* <button >Edit TODOS</button> */}
                        </li>
                        
                    </>
                )
            })
        }
    </ul>
  )
}

export default TodoList