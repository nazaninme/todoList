import { useState } from 'react'
import Header from './assets/components/Header'
import './App.css'
import Form from './assets/components/Form'
import TodoList from './assets/components/TodoList'
import Todo from './assets/components/Todo'

function App() {
  const[input,setInput]=useState("")
  const [todos,setTodos]=useState([]);
  const[alert,setAlert]=useState("");
 
    

  return (
    <div className='todo-app'>
    <Header/>
    <Form  
    input={input} 
     todos={todos}
     setTodos={setTodos}
     setInput={setInput}
     setAlert={setAlert}/>
    
    <TodoList 
    todos={todos}
    setTodos={setTodos}
    
    />
   <p className='alert animate__flash animate__animated'>{alert}</p>
    </div>
  )
}

export default App
