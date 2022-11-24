import React from 'react'
import {FaTimes, FaBeer, FaRegCircle} from 'react-icons/fa'

function Symbol({player}) {
    switch(player){
        case "circle":
            return <FaRegCircle />
        case "cross":
            return <FaTimes />
        default: 
            return <FaBeer />

    }
  
}

export default Symbol