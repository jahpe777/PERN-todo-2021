import React, { Fragment } from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
};

export default App;
