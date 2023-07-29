import React from 'react';
import TodoItem from './TodoItem/TodoItem';

const TodoList = ({ todoItems, remove }) => {
  console.log(todoItems);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Ваши задачи на сегодня:</h1>
      {todoItems.map((todoItem, index) => (
        <TodoItem remove={remove} number={index + 1} todoItem={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
