import React from "react";

const AddStudent = ({ title, id }) => {
  return (
    <li>
      <span>{title}</span>
      <button>
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default AddStudent;
