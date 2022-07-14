import React from 'react';

const ToDo = ({ todo, handleToggle, index }) => {

  return (
    <div className={todo.complete ? "strike" : ""} onClick={() => handleToggle(index)}>
      {todo.task}
    </div >
  );
};

export default ToDo;