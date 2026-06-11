import React from 'react'

const App = () => {
    const employees = [ { id: 1, name: "John", salary: 25000 }, 
        { id: 2, name: "David", salary: 45000 }, 
        { id: 3, name: "Sam", salary: 60000 }, 
        { id: 4, name: "Peter", salary: 30000 } ]; 

    const highsal = employees.filter((e)=>e.salary>40000)
  return (
    <>
    <h1>All Employee list </h1>
    {employees.map((e)=>(
        <ul key={e.id}>
            <li>Employee Name :{e.name} </li>
            <li>Employee Salary :{e.salary} </li>   
            </ul>
    ))}
    <h1>Employee  whose salary is greater than 40,000</h1>
    {highsal.map((e)=>(
      <ul key={e.id}>
            <li>Employee Name :{e.name} </li>
            <li>Employee Salary :{e.salary} </li>   
            </ul>
    ))}
    </>

  )
}

export default App