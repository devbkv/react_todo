import React from 'react';
import TodoItem from './TodoItem/TodoItem';

const TodoList = ({ todoItems, remove, setTodoItems }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Ваши задачи на сегодня:</h1>
      {todoItems.map((todoItem, index) => (
        <TodoItem key={index} remove={remove} number={index + 1} todoItem={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
