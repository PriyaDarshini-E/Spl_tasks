import React from 'react'

const App = () => {
  const cart = [ { product: "Laptop", price: 50000 }, 
    { product: "Mouse", price: 500 }, 
    { product: "Keyboard", price: 1500 } ]
    
    const totalAmount = cart.reduce((total, item) => total + item.price,0);

  return (
    <>
      <h2>Cart Items</h2>

      {cart.map((item, index) => (
        <div key={index}>
          <p>
            {item.product} - ₹{item.price}
          </p>
        </div>
      ))}

      <h2>Total Cart Amount : Rs.{totalAmount}</h2>
   
    </>
  )
}

export default App