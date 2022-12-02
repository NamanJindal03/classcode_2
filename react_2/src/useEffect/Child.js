import React, { useEffect } from 'react'

function Child() {
    // useEffect(()=>{
        
    // },[])
    //combination of mounting and unmounting
    useEffect(()=>{
        console.log('mounted') //mointinf
        return ()=>{
            console.log('I am unmounted') //unmounting
        }
    },[])
  return (
    <div>Child</div>
  )
}

export default Child