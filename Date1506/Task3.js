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
let movie_ID = 102;
let seatsRequired = 41;
let remaining_seat = 0;
for (let i = 0; i < movie_ticket.length; i++) {
    // console.log(movie_ticket[i])
    if (movie_ID == movie_ticket[i].Movie_ID) {
        let Selected_movie = movie_ticket[i].Movie_Name;
        // console.log(Selected_movie);
        remaining_seat =  movie_ticket[i].Available_Seats - seatsRequired;
        if(seatsRequired<=remaining_seat){
            if (seatsRequired <= movie_ticket[i].Available_Seats) {
            let total_amt = seatsRequired * movie_ticket[i].Ticket_Price;
            console.log("Booked sucessfully")
            console.log(`Movie name : ${movie_ticket[i].Movie_Name} and booked seats is ${seatsRequired} and the total amount is ${total_amt}`)
        } 
        }else {
            console.log("Booking failed due to insufficient seats available")
            console.log(`the remaining seats available : ${movie_ticket[i].Available_Seats}`)
        }
    }
}