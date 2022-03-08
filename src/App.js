import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";


function App() {
  const [showForm,setForm]=useState(false);
  const [tasks,setTasks]=useState([
    {
      id: 1,
      text: "Html",
      reminder: true,
    },
    {
      id: 2,
      text: "Css",
      reminder: false,
    },
  ]);

  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  const onToggle=(id)=>{
    setTasks(tasks.map((task)=>(task.id)===id ? {...task,reminder:!task.reminder}:task));
    // temp.className+='task';
    // temp.className+='reminder';
    // console.log('reminder added');
  }

  const addTask=(task)=>{
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }

  return (
    


    <div className="container">
      <Header title="Working with props" onShow={()=>
        setForm(!showForm)}
        showAdd={showForm}
        />
      {showForm && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={onToggle}/>

    
    </div>
  );
}

export default App;
