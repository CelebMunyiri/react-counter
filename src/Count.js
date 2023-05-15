import {useState,useEffect} from "react";
const Count=()=>{
    const [counter,setCounter]=useState(0);
    useEffect(()=>{
setCounter(100)
    },[]);
return(
    <div className="App">
        <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
        <h1>{counter}</h1>
    <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
    </div>
)
}
export default Count
//learnt useEffect and useState hooks
//never update a state manually, you should use its setter method
//and thats a react rule
//learnt components and more, you can add css to the app.js file
