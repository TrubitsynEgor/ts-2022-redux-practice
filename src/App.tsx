import { Todo } from './types';
import { NewTodoForm } from 'features/Todo/NewTodoForm';
import { useState, useEffect } from 'react';
import TodoList from './features/Todo/TodoList';

const App = () => {

  return (
    <div className="App" >
      <NewTodoForm />
      <TodoList />
    </div >
  );
}

export default App;

