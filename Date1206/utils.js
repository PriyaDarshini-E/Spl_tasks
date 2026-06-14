export const calculateTotalMarks = (...marks) =>{
    let total =0;
    for(let mark of marks){
        total+=mark
    }
    return total;
}
console.log(calculateTotalMarks(80,90,70))