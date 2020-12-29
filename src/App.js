import './App.css';
import { useState, useEffect } from 'react';
import Form from './Components/Form.js';
import TodoList from './Components/TodoList.js';

function App() {
  
  //State
  const [inputText, setInputText ] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  //use effect
  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status]);

  //Functions & events

  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFilterTodos(todos.filter((todo)=>
          todo.completed === true
        ));
        break;
      case 'notcompleted' :
        setFilterTodos(todos.filter((todo)=>
          todo.completed === false
        ));
        break;
      default :
        setFilterTodos(todos);
        break;
    }
  }
  const saveLocalTodos = () => {
      localStorage.setItem('todos',JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') == null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let getTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(getTodo);
    }
  }
  return (
    <div className="App">
      <header> 
        <h1>To-Do & Do !</h1>
      </header>
      <Form  
        todos = {todos} 
        setTodos = {setTodos} 
        setInputText = {setInputText} 
        inputText = {inputText}
        status = {status}
        setStatus = {setStatus}
        />
      <TodoList
        todos = {todos}
        setTodos = {setTodos}
        filterTodos = {filterTodos}
      />
    </div>
  );
}

export default App;
