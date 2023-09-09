import { useState } from "react"

export default function Counter(){
    const [count, setcount] = useState(0)
// const handleAdd = () =>{
// const newCount = count + 1;
// setcount(newCount);
const handleReduce = () =>{
    const reduceHandle = count - 1;
    setcount(reduceHandle);
}
// }
return(
    <div style={{border: "2px solid yellow"}}>

        <h3>counter: {count}</h3>
        {/* <button onClick={handleAdd}>Add</button> */}
        <button onClick={handleReduce}>Reduce</button>
    </div>
)
}