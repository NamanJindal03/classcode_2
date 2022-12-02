import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoForm({addTodo}) {

    const [todoString, setTodoString] = useState('');
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        let todo = todoString.trim();
        if(!todo) alert('cannot deal with blank todo');
        const newTodo = {
            name: todo,
            id: uuidv4(),
            isComplete: false 
            // id: Date.now()
        }
        //we have a legit value with us
        addTodo(newTodo)
        setTodoString('')
    }

  return (
    <>
        <form action="" onSubmit={onSubmitHandler}>
            <input type="text" value={todoString}  onChange={(e)=>{
                setTodoString(e.target.value)
            }}/>
            <button >Add TODOS</button>
            
        </form>
    </>
  )
}

export default TodoForm

/* task  */