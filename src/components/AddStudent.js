import React, { useRef } from "react";

const AddStudent = (props) => {
  const inputStudent = useRef("");
  const onAddStudent = () => {
    let input_value = inputStudent.current.value;
    inputStudent.current.value = "";
    props.addStudentToList(input_value);
  };
  return (
    <header>
      <h1>Add Student</h1>
      <div>
        <input type="text" placeholder="Add Student" ref={inputStudent} />
        <button onClick={() => onAddStudent()}>
          {" "}
          <i className="fa fa-plus-square" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default AddStudent;
