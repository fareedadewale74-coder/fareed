import { useState, useEffect } from "react";

function Count(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `Pressed ${count} times`;
    }, [count]);

    useEffect(()=> {
        return count < 0 ? setCount(0) : undefined;
    }, [count]);
    
    useEffect(()=> {
        return count < 0 ? alert("Can't go below 0") : undefined;
    }, [count]);
    return(
        <div>
            <h1 style={{fontSize: "1.5rem", color: "cornflowerblue"}}>Count: {count}</h1>
            <button onClick={() => setCount(count + 10)}>Click to add ten</button><br />
            <button onClick={() => setCount(count - 5)}>Click to subtract by 5</button><br />
            <button onClick={()=> setCount(count * 3)}>Click to  multiply by three</button><br />
            <button onClick={() => setCount(0)}>Reset Count Value</button>
        </div>
    );
}

export default Count
