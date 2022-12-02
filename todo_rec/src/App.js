import React, {useState, useEffect} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const addTodo = (todoObj) =>{
    console.log(todoObj)

    const currArr = [...todo, todoObj];
    setTodo([...todo, todoObj]);

    //TODO: handle local storage over here
    localStorage.setItem('todos', JSON.stringify(currArr))

    
  }

  const deleteTodo = (idToBeDeleted) =>{
    const updatedTodos = todo.filter(td => td.id !==idToBeDeleted )

    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    // addTodo({id:idToBeDeleted, name: 'sample'})

    setTodo(updatedTodos)
  }
  const markComplete = (idToBeDeleted) =>{
    // const updatedTodos = todo.filter(td => td.id !==idToBeDeleted )
    
    let todoObj = todo.find((td)=> td.id === idToBeDeleted)
    const tempTodo = todo.filter(td => td.id !==idToBeDeleted )
    todoObj.isComplete = true;

    const updatedTodos = [...tempTodo, todoObj]

    setTodo(updatedTodos)

    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }
  console.log(todo);

  useEffect(()=>{
    let localStorageCurrValue = localStorage.getItem('todos')
    console.log(localStorageCurrValue)
    console.log(JSON.parse(localStorageCurrValue))
    if(localStorageCurrValue){
      setTodo(JSON.parse(localStorageCurrValue))

    }
  }, [])
  

  return (
    <>
      <TodoList todoArr = {todo} deleteTodo={deleteTodo} markComplete={markComplete}/>
      <TodoForm addTodo={addTodo}/>
    </>
  );
}

export default App;
