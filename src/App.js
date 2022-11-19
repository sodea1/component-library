import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/todos/TodoForm';
import FlashIndex from './components/flashcards/FlashIndex';
import TodoIndex from './components/todos/TodoIndex';
import { useFetch } from './components/custom_hooks';

function App() {
  const [todos, setTodos] = useState([]);
  const [creating, setCreating] = useState(false);
  const todoURL = 'https://jsonplaceholder.typicode.com/todos';

  useFetch(todoURL, setTodos); 

  const toggleCreateForm = (e) => {
    e.preventDefault();
    setCreating(creating ? false : true);
  }

  return (
    <div>

      {/* Todos */}
      {/* {!creating ? <button onClick={toggleCreateForm} >Create Todo</button> : ""}
      {creating ? <button onClick={toggleCreateForm} >Cancel</button> : ""}
      {creating ? <TodoForm setTodos={setTodos} todos={todos} setCreating={setCreating} /> : ""}

      <div className='todo-index-container'>
        {todos.length > 0 && <TodoIndex todos={todos} />}
      </div> */}

      {/* Flashcards */}
      {/* <FlashIndex /> */}


    </div>
  );
}

export default App;
