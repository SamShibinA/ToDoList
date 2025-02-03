import {React,useState} from "react";


const ToDo=()=>{
const [todo,setTodo]=useState([]);
const [input,setInput]=useState('');
const handleInputChange=(e)=>{setInput(e.target.value)};

const handleAddTodo=()=>{
if(input.trim()){
    setTodo([...todo,input]);
    setInput('');
}
};

const handleRemoveTodo=()=>{
    if(todo.length>0){
        const updatedTodo=todo.slice(0,-1);
        setTodo(updatedTodo);
    }
};

return(
    <>
    <div>
        <h1>To-Do List</h1>
        <div>
            <input type="text" value={input} onChange={handleInputChange} placeholder="Enter your To-Do List"/>

            <button onClick={handleAddTodo}>Add To-Do</button>
        </div>

        <button onClick={handleRemoveTodo}>Remove To-Do</button>

        <ul>
            {
                todo.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
    </>
)

}

export default ToDo;