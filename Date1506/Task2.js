const employee = [
    {
    emp_id: 101,
    emp_name: "Priya",
    checkIn: "09:00",
    checkOut: "18:00",
    status: "Present"
},{
    emp_id: 102,
    emp_name: "darshini",
    checkIn: "09:00",
    checkOut: "18:00",
    status: "Absent"
},
{
    emp_id: 103,
    emp_name: "kavya",
    checkIn: "09:00",
    checkOut: "18:00",
    status: "Absent"
},
{
    emp_id: 104,
    emp_name: "Hema",
    checkIn: "09:00",
    checkOut: "18:00",
    status: "Present"
},
{
    emp_id: 105,
    emp_name: "Vija",
    checkIn: "09:00",
    checkOut: "18:00",
    status: "Present"
}]
let presentCount = 0;
let AbsentCount = 0 ;
for(let emp of employee){
    //console.log(emp)
    if(emp.status == "Present"){
       console.log(`Present Employees ${emp.emp_name}`)
        presentCount++;
    }
    if(emp.status == "Absent"){
        console.log(`Absent Employees ${emp.emp_name}`)
        AbsentCount++;
    }
}

console.log(`Total Present Employees ${presentCount}`)
console.log(`Total Absent Employees ${AbsentCount}`)

let search ="Hema"

for(let searchemp of employee){
    if(searchemp.emp_name===search){
        console.log(searchemp)
    }
}