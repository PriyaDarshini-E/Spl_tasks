import { useEffect, useState } from "react"
import axios from 'axios'

const App = () => {
  const [empdept,setEmpdept] = useState([])

  useEffect(()=>{
    const fetchdata =async()=>{
      const fetch = await axios.get("http://localhost:3000/api/getdepartment")

      console.log(fetch);
      
      // /console.log(fetch.data.departments)

      setEmpdept(fetch.data.departments)
      
      
    }
    fetchdata()
  },[])
  return (
    <>
     <select> 
      {empdept.map((e,i)=>(

        <option key={i}>{e.departments}</option> 

      ))}
      
    
     </select> 
    
    </>
  )
}

export default App