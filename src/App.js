import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/todos/TodoForm';
// import FlashIndex from './components/flashcards/FlashIndex';
import TodoIndex from './components/todos/TodoIndex';

function App() {
  const [todos, setTodos] = useState([]);
  const [creating, setCreating] = useState(false);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data) => setTodos([...data]))
      .catch((err) => console.log(err))
  }, [])

  const toggleCreateForm = (e) => {
    e.preventDefault();
    setCreating(creating ? false : true);
  }

  return (
    <div>
      {!creating ? <button onClick={toggleCreateForm} >Create Todo</button> : ""}
      {creating ? <button onClick={toggleCreateForm} >Cancel</button> : ""}
      {creating ? <TodoForm setTodos={setTodos} todos={todos} setCreating={setCreating} /> : ""}

      <div className='todo-index-container'>
        <TodoIndex todos={todos} />
      </div>
    </div>
  );
}

export default App;
