import React,{useEffect,useState} from "react";

const UsingFetch= () => {
  const  [user,setUser]=useState([])

    const fetchData =() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(
            response => {
               return response.json()
            }
        )
            .then(
                data =>{
                    setUser(data)
                }
            )
    }
    
    useEffect(()=> {
        fetchData()}
    ,[] )
    return (
        <div>
            <ul>
                {user.map(users =>(
                    <li key={users.id}>{users.email}</li>
                ))}
            </ul>
    
        </div>
    )
}
export default UsingFetch;