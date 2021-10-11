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

  const deteleTaskById = (idTask) => {
    if (window.confirm("Are you sure ?") === false) return;

    let newlistStudent = [...listStudent];
    newlistStudent = newlistStudent.filter((_, index) => index !== idTask);
    setlistStudent([...newlistStudent]);
    setlistStudentBackup([...newlistStudent]);
  };

  const filterTaskByTitle = () => {
    let query = filterTaskInput.current.value;
    if (query === "") setlistStudent([...listStudentBackup]);
    else {
      let newlistStudent = [...listStudent];
      newlistStudent = newlistStudent.filter((titleTask) =>
        titleTask.includes(query)
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
            placeholder="filter task by title"
            onKeyUp={filterTaskByTitle}
            ref={filterTaskInput}
          />
          <i className="fa fa-search" />
        </div>
        <ListStudent list={listStudent} onDeleteTask={deteleTaskById} />
      </div>
    </>
  );
};

export default App;
