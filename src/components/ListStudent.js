import React from "react";
import AddStudent from "./student";

const ListStudent = ({ list }) => {
  return (
    <ul>
      {list.map((studentTitle, index) => (
        <AddStudent key={index} id={index} title={studentTitle} />
      ))}
    </ul>
  );
};

export default ListStudent;
