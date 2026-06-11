import React from 'react'

const App = () => {
  const users = [ { id: 1, name: "Sudhan" }, { id: 2, name: "Kumar" }, { id: 3, name: "Ravi" } ];
 const findUser = users.find((e)=>e.id===2)
  return (
    <>
    <h1>ALl users</h1>
    {users.map((e)=>(
      <ul key={e.id}>
        <li>User Name :{e.name}</li>
      </ul>
    ))}

    <h1> the user whose id is 2</h1>
    <ul>
      <li>User Id:{findUser.id}</li>
      <li>User Name :{findUser.name}</li>
    </ul>


    </>
  )
}

export default App