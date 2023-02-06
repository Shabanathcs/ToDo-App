import { useState } from 'react';
import './App.css';

function App() {
  const [toDos,setTodos]=useState([]);
  const [toDo,setTodo]=useState('')

 

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's my ToDos 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e)=>{setTodo(e.target.value)
        console.log(toDo);
        }} placeholder="🖊️ Add item..." />
        
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      
      <div className="todos">
        { toDos.map((obj)=>
        
            {return(
                  <div className="todo" key={obj.id}>
                  <div className="left">
                    <input onChange={(e)=>{
                      
                      setTodos(toDos.filter(obj2=>{
                        if(obj2.id===obj.id){
                          obj2.status=e.target.checked
                        }
                        return obj2;
                      }
                      ))

                    }}
                    value={obj.status} type="checkbox" name="" id="" />
                    
                    <p>{obj.text}</p>
                    
                  </div>
                  <div className="right">
                   

                    <i className="fas fa-times" onClick={(e)=>{
                      console.log("delet button clickd",obj)
                      setTodos(toDos.filter(obj2=> obj2 !== obj))
                      }}></i>
                  
                  </div>
                </div>
                    
                )})
        }
        <br/>
        <h1>Task Done</h1><br/>
        {
          toDos.map((obj)=>{
            if(obj.status)
            {
              return(<div className='input'><h4>{obj.text}</h4></div>)
            }
            return null;
          }
          )
        }
      </div>
    </div>

  );
}

export default App;
