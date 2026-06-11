import React from "react";

const App = () => {
  const orders = [
    { id: 1, customer: "John", amount: 5000, status: "Completed" },
    { id: 2, customer: "David", amount: 3000, status: "Pending" },
    { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
    { id: 4, customer: "Peter", amount: 2000, status: "Pending" },
  ];

  const completedOrders = orders.filter((e) => e.status === "Completed" );

  const foundOrder = orders.find((e) => e.id === 3);

  const totalRevenue = orders.reduce((total, order) => total + order.amount,0);

  return (
    <div>
      <h1>All Orders</h1>

      {orders.map((e) => (
        <div key={e.id}>
          <p>Customer: {e.customer}</p>
          <p>Amount: ₹{e.amount}</p>
          <p>Status: {e.status}</p>
          <hr />
        </div>
      ))}

      <h1>Completed Orders</h1>

      {completedOrders.map((e) => (
        <div key={e.id}>
          <p>Customer: {e.customer}</p>
          <p>Amount: ₹{e.amount}</p>
        </div>
      ))}

      <h1>Order with ID = 3</h1>

      <p>Customer: {foundOrder.customer}</p>
      <p>Amount: ₹{foundOrder.amount}</p>
      <p>Status: {foundOrder.status}</p>

      <h1>Total Revenue</h1>

      <p>₹{totalRevenue}</p>
    </div>
  );
};

export default App;