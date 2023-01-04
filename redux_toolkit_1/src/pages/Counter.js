import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increament, decreament } from '../store/counterSlice';
function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state)=> state.counter) //subscribed to counter state
    function handleIncreament(number) {
        //we will be sending information to the store 
        //useDispatch
        dispatch(increament(number))
    }
    function handleDecreament(number) {
        //we will be sending information to the store 
        //useDispatch
        dispatch(decreament(number))

    }
  return (
    <div>
        <h1>Redux Counter</h1>
        <section>
            <h2>Counter {count}</h2>{/* this state we need to fetch from the store -> useSelector */}
            <button onClick={()=> handleIncreament(10)}>Inc</button>
            <button onClick={()=> handleDecreament(10)}>Dec</button>
        </section>
    </div>
  )
}

export default Counter