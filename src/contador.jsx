import { useState } from "react";

const Contador = () =>{
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={()=> setCount(count +1)}>Cuenta: {count}</button>
        </>
    )
}


export default Contador