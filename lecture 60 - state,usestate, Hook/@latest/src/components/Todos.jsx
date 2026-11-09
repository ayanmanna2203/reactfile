import React, { useState } from 'react'

function Todos() {

    // let value =""
    let [value, setVlaue] = useState("")
    let [todos , setTodos] = useState(["todo1", "todo2", "todo3"])
    // let todos = ["todo1", "todo2", "todo3"]
    // function printValue(e){
    //     // console.log(e.target.value);
    //     setVlaue(e.target.value)
        
    // }
    function addTodo(e){
        e.preventDefault();
        if(!value.trim()){
            return;
        }
        // todos.push(value);
        // console.log(todos);
        setTodos((prev)=>  [...prev ,value])
        // setVlaue(e.target.value)
        setVlaue("")
    }
  return (
    <div>
        <h1>Todos</h1>
        <form action="" onSubmit={addTodo}>
            <input value ={value} type="text"   onChange={(e)=>  setVlaue(e.target.value)}/>
            <button >Add</button>
        </form>
        <ul>
            {
                todos.map((todo)=>{
                   return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Todos