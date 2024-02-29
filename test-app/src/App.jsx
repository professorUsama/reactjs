import { useState, useEffect } from "react"
import axios from "axios";

function App() {
const [users, setUsers] = useState([]);

async function getData(url) {
  const {data:{products}}=await axios.get(url);
  setUsers(products)
}
useEffect(() =>{
  getData("https://dummyjson.com/products");
},[])

  return (
    <>
    <ul>
    {users?.map((user,i)=>{
      return <li key={i}>{user.title}</li>
    })}
    </ul>
    </>
  )
}
export default App
