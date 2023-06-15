import React,{useState} from 'react';
import '../styles/game.css';

const Board=({start,setStart})=>{

    const [turn,setTurn]=useState('X');

    const [isEmpty , setIsEmpty]=useState(Array(9).fill(''));
    // console.log(turn)
    // console.log("this is the state:"+isEmpty[0])
    const handleClick=(e)=>{
        if(!start){
            const newArray=[...isEmpty]
            const index=(Number)(e.target.id)
            // console.log((Number)(e.target.id))
            if(isEmpty[e.target.id] === ''){
                if(turn==='X'){
                    newArray[index]='X';
                    e.target.innerHTML=newArray[index];
                    setTurn(prevTurn=>prevTurn='O')
                }else if(turn==='O'){
                    newArray[index]='O';
                    e.target.innerHTML=newArray[index];
                    setTurn(prevTurn=>prevTurn='X')
                }
                setIsEmpty(newArray);
                console.log(newArray)
                checkWinner()
            }else{
            console.log("This box is already in use")
            }
        }
    }

    const checkWinner=()=>{
        let winningConditions=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (
                isEmpty[a] !== '' &&
                isEmpty[a] === isEmpty[b] &&
                isEmpty[a] === isEmpty[c]
            ) {
            //   console.log('winner');
                gameEnding();
                return `${isEmpty[a]} is the winner`;
            }
        }
        if(isEmpty.every(value=>value !== '')){
            gameEnding()
            return "Draw"
        }
    }

    const gameEnding=()=>{
        const boxes=document.querySelectorAll('.box')
        setTimeout(()=>{
            setStart(true)
            boxes.forEach(ele=>{
                ele.innerHTML='';
            })
            setIsEmpty(Array(9).fill(''))
        },1000)
    }

    return(
        <>        
            <div className='monitor'>
                {(start ? 'Tic Tac Toe' :(checkWinner() ? checkWinner() : `${turn} Turn`)) }
            </div>
            <div className='board'>
        { isEmpty.map((value, index) => (
          <div
            key={index}
            id={index}
            className='box'
            onClick={handleClick}
          ></div>
        ))}
      </div>
        </>
    );
}

export default Board;