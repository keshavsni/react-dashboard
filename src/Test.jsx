import React,{useState,useEffect} from "react"
import { createContext } from "react"

const ContextCount = createContext();
const Test = () => {
    const [count,setCount] = useState(0)

    
    const countHandler = () =>{
        setCount(count + 1)
    }


    return(
        <>
            <ContextCount.Provider value={"kokil"}>
            <button type="button" onClick={countHandler}>Count {count} </button>
            </ContextCount.Provider>
        </>
    )
}

export default Test;
export {ContextCount};
