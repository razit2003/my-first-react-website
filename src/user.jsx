import { useEffect } from "react";
import { useState } from "react"

export default function Users(){
    const [users , setUsers] = useState([]);
    useEffect(() =>{
fetch('https://jsonplaceholder.typicode.com/users')
.then ( res => res.json())
.then (data => setUsers(data))

    }, [])
    return (
<div>
<h2>Users: {users.length}</h2>
</div>

    )
}
// **1.. declare a state to hold the data
// **2.. use effect with callback and dependancy with array
// **3.. use fetch to load data