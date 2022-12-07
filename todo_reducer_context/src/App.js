import React, {useReducer, useState} from 'react';
import { TodoContext } from './context/TodoContext';
import todoReducer from "./context/reducer"
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';

function App() {
  /* state ->  */
  const [todos, dispatch] = useReducer(todoReducer, [])
  console.log(todos)
  const [todo, setTodo] = useState([])
  /* 
    setTodo([...todo, value])
  */
  return (
    <>
      <TodoContext.Provider value={{todos, dispatch}}>
        <Todos />
        <TodoForm />
      </TodoContext.Provider>
    </>
  );
}

export default App;
