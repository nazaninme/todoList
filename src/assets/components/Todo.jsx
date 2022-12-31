import React from 'react'

export default function Todo({text,todo,todos,setTodos}) {

  function handleDelet(){
    setTodos(todos.filter((i)=> i.id !== todo.id))

  }

  function handleDone(){
    setTodos(todos.map((i)=>{
      if(i.id===todo.id){
        return{
          ...i, isDone: !i.isDone
        }
        
      }
      return i
    }
    ))
  }


  // function handleEdit(){

  //   setTodos(i)




  // }
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.isDone ? "isDone" : ""}`}>{text}</li>
      <button className='done-btn' onClick={handleDone}>
      <i className="fa-solid fa-clipboard-check"></i>
      </button>
      <button className='del-btn' onClick={handleDelet}>
      <i className="fa-sharp fa-solid fa-eraser"></i>
      </button>
      {/* <button className='edit-btn' onClick={handleEdit}>
      <i className="fa-sharp fa-solid fa-eraser"></i>
      </button> */}
    </div>
  )
}
