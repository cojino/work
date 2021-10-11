import React from "react";
import AddStudent from "./student";

const ListStudent = ({ list, onDeleteStudent }) => {
  return (
    <ul>
      {list.map((studentTitle, index) => (
        <AddStudent
          key={index}
          id={index}
          title={studentTitle}
          onDeleteStudent={onDeleteStudent}
        />
      ))}
    </ul>
  );
};

export default ListStudent;
