import React from "react";

const AddStudent = ({ title, id, onDeleteStudent }) => {
  return (
    <li>
      <span>{title}</span>
      <button onClick={() => onDeleteStudent(id)}>
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default AddStudent;
