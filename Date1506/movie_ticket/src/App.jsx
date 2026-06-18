import React from 'react'

const App = () => {
  const movie_ticket = [
    {
        Movie_ID: 101,
        Movie_Name: "kaththi",
        Ticket_Price: 150,
        Available_Seats: 50
    },
    {
        Movie_ID: 102,
        Movie_Name: "Theri",
        Ticket_Price: 200,
        Available_Seats: 40
    },
    {
        Movie_ID: 103,
        Movie_Name: "GOAT",
        Ticket_Price: 250,
        Available_Seats: 20
    },
]

const handleClick =()=>{
  
}
  return (
    <>
    {movie_ticket.map((e)=>(
      <ul key={e.Movie_ID}>
          <li>Movie Name : {e.Movie_Name}</li>
          <li>Ticket_Price : {e.Ticket_Price}</li>
          <li>Available_Seats : {e.Available_Seats}</li>
          <button onClick={handleClick}>Book Now</button>
      </ul>
    ))}
      
    </>
  )
}

export default App