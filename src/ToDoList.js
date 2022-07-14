import React from 'react';
import ToDo from './ToDo';
import Header from './Header';

const ToDoList = ({ myList, handleFilter, handleToggle }) => {
  return (
    <div>
      <Header />
      {myList.map((todo, index) => {
        return (
          <ToDo key={index} index={index} todo={todo} handleToggle={handleToggle} />
        )
      })}

      <button style={{ margin: '50px' }} onClick={handleFilter}>Clear Complete</button>
    </div>
  );
};

export default ToDoList;