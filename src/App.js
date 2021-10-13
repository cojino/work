import React from "react";
import { useState, useRef } from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import ListStudent from "./components/ListStudent";
import { Student } from "./models/Student";
//class thing
const BigStudentList = [new Student(1, "ayman"), new Student(2, "hamza")];

const App = () => {
  const [listStudent, setlistStudent] = useState(BigStudentList);
  const [listStudentBackup, setlistStudentBackup] = useState(BigStudentList);
  const filterStudentInput = useRef("");

  const addNewStudent = (nameStudent) => {
    if (nameStudent !== "") {
      let nameStudentList = [
        ...listStudent,
        new Student(listStudent.length + 1, nameStudent),
      ];
      setlistStudent([...nameStudentList]);
      setlistStudentBackup([...nameStudentList]);
    } else alert(" student name should not be empty");
  };

  const deteleStudentById = (idTask) => {
    if (window.confirm("Are you sure ?") === false) return;

    let newlistStudent = [...listStudent];
    newlistStudent = newlistStudent.filter((c) => c.id !== idTask);
    setlistStudent([...newlistStudent]);
    setlistStudentBackup([...newlistStudent]);
  };

  const filterStudentByTitle = () => {
    let query = filterStudentInput.current.value;
    if (query === "") setlistStudent([...listStudentBackup]);
    else {
      let newlistStudent = [...listStudent];
      newlistStudent = newlistStudent.filter((titleStudent) =>
        titleStudent.includes(query)
      );
      setlistStudent([...newlistStudent]);
    }
  };
  return (
    <>
      <div>
        <AddStudent addStudentToList={addNewStudent} />
        <hr color="gray" />
        <div>
          <input
            type="text"
            placeholder="filter students by title"
            onKeyUp={filterStudentByTitle}
            ref={filterStudentInput}
          />
          <i className="fa fa-search" />
        </div>
        <ListStudent list={listStudent} onDeleteStudent={deteleStudentById} />
      </div>
    </>
  );
};

export default App;
