import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Product Search System</h2>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px 0",
                width: "200px",
              }}>

              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
            </div> 
             ))
            ) : (
          <h3>No Products Found</h3>
        )}
      </div>
    </div>
  );
};

export default App;