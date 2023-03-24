import { NewTodoForm } from 'features/Todo/NewTodoForm';
import TodoList from './features/Todo/TodoList';
import { NewAsyncTodo } from 'features/Todo/AsyncTodo/NewAsyncTodo';
import AsyncTodoList from 'features/Todo/AsyncTodo/AsyncTodoList';

const App = () => {

  return (
    <div className="App" >
      <NewTodoForm />
      <TodoList />

      <hr />

      <NewAsyncTodo />
      <AsyncTodoList />
    </div >
  );
}

export default App;

