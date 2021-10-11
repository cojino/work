import { useState, useRef } from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import ListStudent from "./components/ListStudent";

const App = () => {
  const [listStudent, setlistStudent] = useState([]);
  const [listStudentBackup, setlistStudentBackup] = useState([]);
  const filterTaskInput = useRef("");

  const addNewStudent = (newTask) => {
    if (newTask !== "") {
      setlistStudent([...listStudent, newTask]);
      setlistStudentBackup([...listStudentBackup, newTask]);
    } else alert(" task title should not be empty");
  };

  return (
    <>
      <div>
        <AddStudent addStudentToList={addNewStudent} />
        <hr color="gray" />
        <div>
          <input
            type="text"
            placeholder="filter task by title"
            ref={filterTaskInput}
          />
          <i className="fa fa-search" />
        </div>
        <ListStudent list={listStudent} />
      </div>
    </>
  );
};

export default App;
