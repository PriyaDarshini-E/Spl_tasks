import React, { useState } from 'react'

const App = () => {
    const [empname,setEmpname] = useState("");
    const [empdept,setEmpdept]=useState("");
    const [empsal,setEmpsal]=useState("");
    const [employees, setEmployees] = useState([]);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const empdetails ={
            name:empname,
            dept:empdept,
            salary:empsal
        }
        setEmployees([...employees,empdetails])
        alert("thanks for the information")
        setEmpname("");
        setEmpdept("");
        setEmpsal("");
    }
    
   return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your name" onChange={(e)=>setEmpname(e.target.value)} value={empname}/>
        <input type="text" placeholder="enter your department"  onChange={(e)=>setEmpdept(e.target.value)}  value={empdept}/>
        <input type="number" placeholder="enter your salary"  onChange={(e)=>setEmpsal(e.target.value)} value={empsal}/>
        <button type="submit">Submit</button>
        </form> 
        {employees.map((e,i)=>(
          <ul key={i}>
            <li>Employees Name: {e.name}</li>
            <li>Employees Department: {e.dept}</li>
            <li>Employees Salary: {e.salary}</li>
          </ul>
        ))} 
        <h2>Total Employees: {employees.length}</h2>
    </>
  )
}

export default App