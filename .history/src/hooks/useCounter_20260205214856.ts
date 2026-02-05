import { useState } from "react"

const useCounter = ()=>{
    const [count, setCount] = useState(0)

    const handleIncrement =()=>{
        setCount (count +1)
    }

    const handleDrecment =()=>{
        setCount (count -1)
        if(count <=0){
            setCount(0)
        }
    }

    return {
        count,
        handleIncrement,
        
    }
}

export default useCounter;