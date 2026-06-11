import React from "react";

const App = () => {
  const students = [
    { id: 1, name: "Arun", mark: 85 },
    { id: 2, name: "Karthik", mark: 45 },
    { id: 3, name: "Vijay", mark: 92 },
    { id: 4, name: "Ajay", mark: 35 },
  ];

  const passedStudents = students.filter((student) => student.mark >= 50);

  const foundStudent = students.find((student) => student.id === 3);

  const totalMarks = students.reduce((total, student) => total + student.mark,0);

  const averageMarks = totalMarks / students.length;

  return (
    <>
      <h1>All Students</h1>
      {students.map((e) => (
        <div key={e.id}>
          <p>
            {e.name} - {e.mark}
          </p>
        </div>
      ))}


      <h1>Passed Students</h1>
      {passedStudents.map((e) => (
        <div key={e.id}>
          <p>
            {e.name} - {e.mark}
          </p>
        </div>
      ))}

      <h1>Student with ID = 3</h1>
      <p>
        {foundStudent.name} - {foundStudent.mark}
      </p>

      <h1>Total Marks</h1>
        <p>{totalMarks}</p>

      <h1>Average Marks</h1>
        <p>{averageMarks}</p>
    </>
  );
};

export default App;