import React, {useState} from 'react'
import {Card, CardBody, Container} from 'reactstrap'
import './style.css'
import Symbol from './Symbol'
const ticTacToeArr = new Array(9).fill("Empty") //whenever array gets updated, your render is getting called in someor
// the other way

function Main() {
    // const [tictacState, setTictacState] = useState(new Array(9).fill("Empty"))
    const [isCircle, setIsCircle] = useState(false);
    const [isWon, setIsWon] = useState(false)

    function isWinner(){
        //ds problem 
        if(ticTacToeArr[0]!== "Empty" && ticTacToeArr[0] === ticTacToeArr[1] && ticTacToeArr[1] === ticTacToeArr[2] ){
            setIsWon(true)
        }
        if(ticTacToeArr[0]!== "Empty" && ticTacToeArr[0] === ticTacToeArr[4] && ticTacToeArr[4] === ticTacToeArr[8] ){
            setIsWon(true)
        }
    }
    

    function playerInput(index){
        if(isWon){
            console.log('already a winner is there');
            return;
        }
        if(ticTacToeArr[index] === "Empty"){
            ticTacToeArr[index] = isCircle ? 'circle': 'cross'
            setIsCircle(!isCircle); //render 
        }
        else{
            console.log('inputting at wrong place')
        }
        isWinner();
    }
  return (
    <>
    <Container>
        
             
        
        <h1>{
            isWon ? "Winner Winner":
                    (isCircle ? "circle's turn" 
                            : "cross turn")
        }</h1>
        <div className='grid-container'>
            {
                ticTacToeArr.map((val, index) =>{
                    return(
                        <Card key={index} className="box" onClick={()=> playerInput(index)}>
                            <CardBody className='temp'>
                                <Symbol player={val}/>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    </Container>
    </>
    /* put up a reset button, only can be fired when there is a winner present -> both ways should be handled */
    /* handle winner for all cases */
    /* handle draw case */
    /* improvement in designs */
    /* display who is the winner along with winner message */
  )
}

export default Main