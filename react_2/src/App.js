import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0) //1
  const [count2, setCount2] = useState(3) //1
  /* polyfill ->  */
  function increaseCall(){
    /* callback  */
    // setCount(count+1); //rerender
    // console.log(count) //0
    // setCount(count+1); //1+1 => 2

    /* is setState asynchronous -> 95% setStarte */
    setCount(()=>{
      return 3
    }); //rerender
    // setCount2((prev)=>{

    // })
    //console.log(count) //0

    setCount((prevState)=>{
      if(prevState%3 ===0){
        return prevState;
      }
      console.log(prevState)
      return prevState +3
    }); //1+1 => 2

    setCount((prevState)=>{
      console.log(prevState)
      return prevState +2
    }); //1+1 => 2

    // console.log(count) //0
    // setCount(count+1); //1+1 => 2
    // console.log(count) //0

    // setCount(count+1); //1+1 => 2
    // console.log(count) //0

    // setCount(count+1); //1+1 => 2
    // setCount(count+1); //1+1 => 2
    // setCount(count+1); //1+1 => 2
    // setCount(count+1); //1+1 => 2
    // setCount(count+1); //1+1 => 2
    // setCount2(count2 + 5);
    // console.log('count2', count2) //3

    // setCount2(count2 + 5);
    // console.log('count2', count2) //3

    // setCount2(count2 + 5);
    // console.log('count2',count2) //3

    // setCount2(count2 + 5);
    // console.log('count2', count2) //3

    // setCount2(count2 + 5);
    // setCount(count+1);
  }
  return (
    <>
      <div>
        {count}
      </div>
      <div>
        {count2}
      </div>
      <button onClick={increaseCall}> click me </button>
    </>
  );
}

export default App;
