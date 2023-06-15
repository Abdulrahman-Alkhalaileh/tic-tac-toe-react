import React,{useState} from 'react';
import '../styles/main.css';
import Board from './Board';

const Main=()=>{

    const [start, setStart] = useState(true);

    const handleStart=()=>{
        setStart( false )
        console.log(start)
    }

    return(
        <>
            <div className='main'>
                <Board start={start} setStart={setStart}/>
                <div>
                {start &&(<button onClick={handleStart} className='btn'>Start</button>)}
                </div>
            </div>
        </>
    );
}

export default Main;