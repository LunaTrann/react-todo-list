import React from 'react';
import ToDo from './ToDo';
import Header from './Header';

const ToDoList = ({ myList, handleFilter, handleToggle }) => {
  return (
    <div className='listContainer'>
      <Header />
      {myList.map((todo, index) => {
        return (
          <ToDo key={index} index={index} todo={todo} handleToggle={handleToggle} />
        )
      })}
    </div>
  );
};

export default ToDoList;