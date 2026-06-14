const totalMarks =(...marks)=>{
    let total =0;
    for(mark of marks){
        total+=mark;
    }
    return total;
}

console.log(totalMarks(80,90,70,60))