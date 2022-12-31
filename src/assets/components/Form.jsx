import React from 'react'

export default function Form({setInput,todos, setTodos, input ,setAlert}) {

    function handleInput(e){
        setInput(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(input){
            setTodos([
                ...todos,{
                    text:input,
                    isDone:false,
                    id:Date.now(),
                }
            ]);
            setInput("");
            setAlert("");
        }
       else{
        setAlert("فیلد خالی است...")
       }
        

    }
  return (
   <form>
    <input onChange={handleInput}
        value={input}
        type="text" 
        className='todo-input'/>
    <button onClick={handleSubmit}
        type='submit'
        className='todo-button'><i className="fa fa-plus" aria-hidden="true"></i>
    </button>
    
    {/* <div className='select'>
        <select name='todos' className='filter-todo' >
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
        </select>
        
    </div> */}

   </form>
  )
}
