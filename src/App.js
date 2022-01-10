import './App.css';
import React, {useState, useEffect} from 'react';

import Header from './components/Header';
import AddForm from './components/AddForm'
import TodoList from './components/TodoList'

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos-data")) || []

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    localStorage.setItem("todos-data", JSON.stringify(todos))
  },[todos])

  return (
    <div className="App">
        <main className="container">
            <Header />

            <AddForm 
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />

            <TodoList 
              todos={todos} 
              setTodos={setTodos} 
              editTodo={editTodo} 
              setEditTodo={setEditTodo} 
              setInput={setInput}
            />
        </main>
    </div>
  );
}

export default App;
