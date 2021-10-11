import React from "react";
import { useState, useRef } from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import ListStudent from "./components/ListStudent";

const App = () => {
  const [listStudent, setlistStudent] = useState([]);
  const [listStudentBackup, setlistStudentBackup] = useState([]);
  const filterStudentInput = useRef("");

  const addNewStudent = (newTask) => {
    if (newTask !== "") {
      setlistStudent([...listStudent, newTask]);
      setlistStudentBackup([...listStudentBackup, newTask]);
    } else alert(" student name should not be empty");
  };

  const deteleStudentById = (idTask) => {
    if (window.confirm("Are you sure ?") === false) return;

    let newlistStudent = [...listStudent];
    newlistStudent = newlistStudent.filter((_, index) => index !== idTask);
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
