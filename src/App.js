import React, { useState, useEffect } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [students, setStudents] = useState([]);

  const createStudent = (event) => {
    event.preventDefault();
    console.log("Form Submission Successful! ")
    const newStudent = {
      name,
      rollno,
      checkInTime,
      checkOutTime
    };
    // Adding new students to the list of students
    setStudents([...students,newStudent ])
  }

  return (
    <div className="App">
      <h1 className='text-center'>Student Attendance System</h1>
      <form onSubmit={createStudent} className="mx-auto w-50">
        <label htmlFor='name' className="text-center">Student Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className='form-control'/><br />
        <label htmlFor="rollno">Roll Number: </label>
        <input type="number" value={rollno} onChange={(e) => setRollno(e.target.value)} required className='form-control'/><br />
        <label htmlFor="checkInTime">Check-in Time</label>
        <input type="time" value={checkInTime} onChange={(e) => setCheckInTime(e.target.value)} required className='form-control w-25'/><br />
        <label htmlFor="checkOutTime">Check-Out Time</label>
        <input type="time" value={checkOutTime} onChange={(e) => setCheckOutTime(e.target.value)} required className='form-control w-25'/><br />
        <input className="btn btn-primary mx-auto" type="submit" value="Submit"/>
      </form>
      <br />

      <h2 className='text-center'>Students Present: {students.length}</h2>

      <table className="mt-5 table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Roll Number</th>
            <th scope="col">CheckIn Time</th>
            <th scope="col">CheckOut Time</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.rollno}>
              <td>{student.name}</td>
              <td>{student.rollno}</td>
              <td>{student.checkInTime}</td>
              <td>{student.checkOutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
