import React, {useState} from 'react'
import {Card, CardBody, Container} from 'reactstrap'
import './style.css'
const ticTacToeArr = new Array(9).fill("Empty")
function Main() {
    // const [tictacState, setTictacState] = useState(new Array(9).fill("Empty"))
    const [isCircle, setIsCircle] = useState(false);

    // function playerInput(index){
    //     if(ticTacToeArr[index] === "empty")
    // }
  return (
    <>
    <Container>
        <h1>{
           isCircle ? "circle's turn" : "cross turn"
        }</h1>
        <div className='grid-container'>
            {
                ticTacToeArr.map((val, index) =>{
                    return(
                        <Card key={index} className="box" onClick={()=> playerInput(index)}>
                            <CardBody>
                                Empty
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    </Container>
    </>
    
  )
}

export default Main