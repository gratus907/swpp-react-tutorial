import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList/TodoList';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
        <TodoList title={"Is change updated?"}></TodoList>
    </div>
  );
}

export default App;
