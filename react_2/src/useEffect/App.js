import React,{useEffect, useState} from 'react'
import Child from './Child';

function App() {
    //mounting phase
    // console.log('exectued after mounting')
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);
    const [userData, setUserData] = useState('');
    const [showChild, setShowChild] = useState(10)
    // const [loader, setLoader] = useState(true)
    // useEffect(()=>{

    //     //api call -> 
    //     console.log('component is mounted');
    //     // setLoader(false)
    // },[])
    // //[] -> acts as a dependency array 

    // //never ever be using -> 
    // //updating -> method -> fn -> useEffect 
    // useEffect(()=>{
    //     //localhost:3000/user/?id=state
    //     //you have the data with you 

    //     //update the userData state -> 

    //     console.log('updating each time')
    // })/* infinity dependency  */

    // useEffect(()=>{
    //     console.log('counter is changed')
    // }, [counter, counter2])

    // useEffect(()=>{
    //     console.log('getting from useEffect', counter2)
    // }, [counter2])


    // const randomArrowFunc = () =>{
    //     setCounter2(counter2 + 1)
    // }
    // console.log(counter2)
    // useEffect(()=>{
    //     return function () {
    //         console.log('i am unmounting')
    //     }
    // },[])

    //NOde 2015 -> 
    //Js is interpreted as well as a compiled lanuage -> 

  return (
    <>
        {/* <div>App</div> */}
        {/* <div>Counter 1 : {counter}</div> */}
        {/* <div>Counter 2 : {counter2}</div> */}
        {/* <div>{console.log('mounting')}</div> */}
        <button onClick={() => setCounter(counter + 1)}>Increament</button>

        {/* <button onClick={() => {
            setCounter2(counter2 + 1)
            console.log('gettting from setState',counter2) //stale value 
        }}>Increament2</button> */}

        <button onClick={() => setUserData(userData + 'n')}>N increaments</button>

{/* conditional rendering -> ternary operator  */}
        {showChild%2  ? 
             '' : <Child />
        }
        <button onClick={() => setShowChild(showChild+1)}>Toggle State</button>
        {/* not True -> ! falsse -> */}
        

    </>
    
  )
}

export default App