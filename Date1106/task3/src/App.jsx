import React from 'react'

const App = () => {
   const products = [ { id: 1, name: "Laptop", price: 50000 }, 
    { id: 2, name: "Mobile", price: 20000 }, 
    { id: 3, name: "Keyboard", price: 1500 } ]


  return (
    <>
    <h1>Products List</h1>
    {products.map((e)=>(
      <ul key={e.id}>
        <li>Product name:{e.name}</li>
        <li>Price : {e.price}</li>
      </ul>
    ))}
    
    </>
  )
}

export default App