import React, { useState } from 'react';


const ToDoForm = ({ addTask, handleFilter }) => {

  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  }
  return (

    <form onSubmit={handleSubmit}>
      <input className="input__task" value={userInput} type='text' onChange={handleChange} placeholder='Enter task...' ></input>
      <div className='buttonWrapper'>
        <button className="btn__in" onClick={handleFilter}>Clear Complete</button>
        <button className="btn__sub">Submit</button>
      </div>
    </form>
  );
};

export default ToDoForm;
