import { useState } from "react"

const useCounter = ()=>{
    const [count, setCount] = useState(0)

    const handleIncrement =()=>{
        setCount (count +1)
    }

    const handle =()=>{
        setCount (count -1)
        if(count <=0){
            setCount(0)
        }
    }

    return {
        count,
        handleIncrement,
        handle
    }
}

export default useCounter;