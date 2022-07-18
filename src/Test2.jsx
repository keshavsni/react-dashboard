import React from "react";
import { useContext } from "react";
import {ContextCount} from "./Test";

   
    const Test2 = () => {
        let counter = useContext(ContextCount);
        return (
            <>
            Context value : {counter}
            </>
        ) 
        
}

export default Test2;