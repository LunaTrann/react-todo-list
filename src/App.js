import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import data from './data.json';
//component
import './style.css';

import Header from './Header';
import ToDoList from './ToDoList';
import Login from './Login';
import Protected from './Protected';
import ToDoForm from './ToDoForm';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [list, setList] = useState(data);


  const handleFilter = () => {
    console.log('handle filter');
    let copy = list.filter(task => task.complete === false);
    setList(copy);
  }

  const handleToggle = (index) => {
    console.log('event ', index);
    console.log('handle toggle');
    const copy = [...list];
    copy[index].complete = !copy[index].complete;
    setList(copy);
  }

  const addTask = (userInput) => {
    const copy = [...list];
    const newList = [...copy, { id: list.length + 1, task: userInput, complete: false }];
    setList(newList);

  }



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/todo" element={
          <Protected isLoggedIn={true}>
            <ToDoList myList={list} handleToggle={handleToggle} />
            <ToDoForm addTask={addTask} handleFilter={handleFilter} />
          </Protected>
        } />
      </Routes>
    </div >
  );
}

export default App;

