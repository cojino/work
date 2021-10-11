import React from "react";

const Student = ({ title, id, onDeleteStudent }) => {
  return (
    <li>
      <span>{title}</span>
      <button onClick={() => onDeleteStudent(id)}>
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default Student;
