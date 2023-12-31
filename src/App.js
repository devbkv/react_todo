import React, { useState } from 'react';

import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const [body, setBody] = useState('');

  const addNewTodoItem = (e) => {
    e.preventDefault();
    const newTodoItem = {
      id: Date.now(),
      body,
    };
    console.log(newTodoItem);
    setTodoItems([...todoItems, newTodoItem]);
    setBody('');
  };

  const removeTodoItem = (todoItem) => {
    setTodoItems(todoItems.filter((tI) => tI.id !== todoItem.id));
  };

  return (
    <div className="App">
      <h1 className="App-header">Добавляйте и удаляйте задачи на день!</h1>
      <div className="addTodoItem">
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Ваша новая задача..."
        />
        <MyButton onClick={addNewTodoItem}>Добавить задачу</MyButton>
      </div>
      <TodoList remove={removeTodoItem} className="TodoList" todoItems={todoItems} />
    </div>
  );
}

export default App;
