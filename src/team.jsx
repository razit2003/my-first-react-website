import { useState } from "react"

export default function Team (){
const [team , setTeam] = useState(11)
const HandleAdd = () =>{
    const newteam = team + 1;
    setTeam(newteam)
}

const HandleRemove = () =>{
    const NewRemove = team - 1;
    setTeam(NewRemove); 
}



const teamStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius:'15px'
}



    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={HandleAdd}>Add</button>
            <button onClick={HandleRemove}>Remove</button>
        </div>
    )
}