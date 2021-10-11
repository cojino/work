import { useState, useRef } from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import ListStudent from "./components/ListStudent";

const App = () => {
  const [listStudent, setlistStudent] = useState([]);
  const [listStudentBackup, setlistStudentBackup] = useState([]);

  return (
    <>
      <div>
        <AddStudent />
        <hr color="gray" />
        <div>
          <input type="text" placeholder="filter task by title" />
          <i className="fa fa-search" />
        </div>
        <ListStudent />
      </div>
    </>
  );
};

export default App;
