import React from "react";
import Student from "./student";

const ListStudent = ({ list, onDeleteStudent }) => {
  return (
    <ul>
      {list.map((s) => (
        <Student
          key={s.id}
          id={s.id}
          title={s.name}
          onDeleteStudent={onDeleteStudent}
        />
      ))}
    </ul>
  );
};

export default ListStudent;
