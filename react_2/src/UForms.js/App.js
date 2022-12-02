import React, {useRef, useState} from 'react'
// import {container, input, button, car}
// let somethingNeedsTobepresentforboth = 'abcd'

function App() {
    // const [state, setState] = useState(0)
    const [finalVal, setFinalVal] = useState("")
      const ref1 = useRef(null)
      const ref2 = useRef(null)
      const ref3 = useRef(null)
      const ref4 = useRef(null)

        //virtual dom -> 
    
      //ref1.current = null | 1
      //console.log(ref1)
        // ref1.current = ref1.current++;
        // ref1.current = ref1.current + 1;
        //ref1.current = 2
        // console.log(ref1)
        // if(ref1.current === 2){
        //     setState(state+1) //1
        // }
        /* 
            next.js -> server side rendering -> don't querySelector -> ref 
        */

        /*  */
    function handleSubmit(e){
        e.preventDefault()
        console.log(ref1.current.value);
        console.log(ref2.current.value);
        // let something = 
        console.log(document.querySelector('#name').value)
        
    }
    function addBoxes(){
        
        let val1 = ref3.current.value ? parseInt(ref3.current.value): 0;
        let val2 = ref4.current.value ? parseInt(ref4.current.value): 0;
        setFinalVal(val1 + val2);

    }
  return (
    <>
        {/* {state}
        <button onClick={()=>{
            setState(state+1)
        }}>Increase</button> */}
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Enter your name</label>
                <input type="text" id="name"  ref={ref1}/>
            </div>
            <br />
            <div>
                <label htmlFor="">Enter your age</label>
                <input type="text" id="age" ref={ref2} />
            </div>
            <div>
                <label htmlFor="">Enter your something</label>
                <input type="text" id="something" />
            </div>

            
            {/*  */}
            <button type="submit">Submit</button>
        </form>
            {/* <div>
                <label htmlFor="">box1</label>
                <input type="number" id="box1" ref={ref3}/>
            </div>
            <div>
                <label htmlFor="">box2</label>
                <input type="number" id="box2" ref={ref4}/>
            </div>
            <button onClick={addBoxes}>add</button>

        <div>
            {finalVal}
        </div> */}
            <div>
                <label htmlFor="">box1</label>
                <input type="number" id="box1" ref={ref3} onChange={addBoxes}/>
            </div>
            <div>
                <label htmlFor="">box2</label>
                <input type="number" id="box2" ref={ref4} onChange={addBoxes}/>
            </div>
            {/* <button onClick={addBoxes}>add</button> */}

        <div>
            {finalVal}
        </div>
    </>
  )
}

export default App