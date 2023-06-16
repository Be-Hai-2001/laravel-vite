import React, { useEffect, useRef, useState } from "react";
import App from "./App";

let timeId;

function UseRef(){
    const [time,setTime] = useState(20);
    const [hiddenStar, setHiddenStar] = useState(true);
    const [hiddenStop, setHiddenStop] = useState(false);
    const [input, setInput] = useState('');

    const timeId = useRef()


    const handleStar = ()=>{
        setHiddenStar(false);
        setHiddenStop(true);
        timeId.current = setInterval(()=>{
            setTime(prevTime => prevTime - 1);
        },1000)
        // console.log(timeId);
    }

    const handeStop = ()=>{

        setHiddenStar(true);
        setHiddenStop(false);
        clearInterval(timeId.current);
    }
    return(
        <>
            <div>
                <App content = {input}/>

                <input type="text" value={input} onChange={ e => setInput(e.target.value) }/>
            </div>


            <div>

                {hiddenStar && <button onClick={handleStar}>Start</button>}

                <label htmlFor="">{time}</label>

                {hiddenStop && <button onClick={handeStop}>Stop</button>}
            </div>
        </>
    )
}
export default UseRef
