const students =[
    {
    stud_id:101,
    stud_name:"Priya",
    marks:[30,70,60,98]
},
    {stud_id:102,
    stud_name:"Hema",
    marks:[80,90,70,68],
},
    {stud_id:103,
    stud_name:"Vija",
    marks:[87,65,70,51]
}]
//console.log(students) //display all students

// for(let student of students){
//     //console.log(student)
//     let total_marks =0;
//     for(let mark of student.marks){
//         //console.log(mark)
//         total_marks+=mark;
//     }
//     console.log(`student name :${student.stud_name} and total marks : ${total_marks}`)
// }
let topperName = "";
let topperMarks = 0;
for(let i=0;i<students.length;i++){
    //console.log(students[i].marks)
    let isPassed = true
    let total_marks  = 0;
    let avg = 0;
    
    for(let j=0;j<students[i].marks.length;j++){
        total_marks+=students[i].marks[j];
        if(students[i].marks[j]<= 50){
            isPassed=false;
        }
       if(isPassed){
    if(total_marks > topperMarks){
        topperMarks = total_marks;
        topperName = students[i].stud_name;
    }
}
    }
     avg = total_marks/students[i].marks.length
     
console.log(`student name :${students[i].stud_name} and total marks : ${total_marks} and average ${avg}` )
if(isPassed){
        console.log("the student is pass")
     }else {
        console.log("the student is fail")
     }

}
console.log(`Topper Name: ${topperName}`);
console.log(`Topper Marks: ${topperMarks}`);


