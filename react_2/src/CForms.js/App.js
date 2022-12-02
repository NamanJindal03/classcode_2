import React, { useState } from 'react'

function App() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0);
    const [course, setCourse] = useState('english')
    console.log(name)
    function changeHandler(e){
        console.log(e.target.name) //name
        // let sample = `set${e.target.name}`
        
        // console.log(first)
        setName(e.target.value)
    }
    function changeHandlerAge(e){
        setAge(e.target.value)
    }
    function handleCourseChange(e){
        setCourse(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log('i am lp')
        let finalRes = {
            name,
            age,
            course
        }
        console.log(finalRes)
        // setAge(0);
        // setName('')
    }
  return (
    // <input type="text" value={name} onChange={(e)=>{
    //     setName(e.target.value)
    // }}/>
    <>
        <form action="">
            <input type="text" value={name} onChange={changeHandler} name="name"/>
            <input type="text" value={age} onChange={changeHandlerAge} name="age"/>
            <select name="" id="" value={course} onChange={handleCourseChange}>
                <option value="english">English</option>
                <option value="science">science</option>
                <option value="mathematics">mathematics</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default App