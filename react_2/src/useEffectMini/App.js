import React, { useEffect, useState, useRef } from 'react'

function App() {
    const [count, setCount] = useState(0);
    const setIntervalRef = useRef();
    console.log(setIntervalRef.current)
    useEffect(()=>{
        setIntervalRef.current = setInterval(()=>{
            setCount((prevState) => prevState + 1)
        }, 1000)
    },[])
    useEffect(()=>{
      if(count >= 10){
        clearInterval(setIntervalRef.current)
      }
    }, [count])
  return (
    <div>{count}</div>
  )
}
Number.parseInt()

export default App