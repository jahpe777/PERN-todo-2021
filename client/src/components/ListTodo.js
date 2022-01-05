import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import EditTodo from './EditTodo';

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/todos');
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (todo_id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/todos/${todo_id}`);
      setTodos(todos.filter((todo) => todo.todo_id !== todo_id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            const { todo_id, description } = todo;
            return (
              <tr key={todo_id}>
                <td>{description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteTodo(todo_id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
