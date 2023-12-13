

// import React from 'react'

// const Addtask = ({tasklist,Settasklist,task,Settask}) => {

//   const sub=(e)=>{
//     e.preventDefault();
    
//     if(task.id){
//       const date=new Date();
//       // const updateTask=tasklist.map((todo)=>(todo.id===task.id ? {id:task.id, name:e.target.task.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo))
//           const update=tasklist.map((todo)=>(todo.id===task.id ? {id:task.id,name:e.target.task.value,time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:todo))
//       Settasklist(update)
//       Settask({});
//     } else{
//       const date=new Date();
//       const newTask={
//         id:date.getTime(),
//         name:e.target.task.value,
//         time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
//       }
//       Settasklist([...tasklist,newTask]);
//       e.target.task.value="";
//     }



//   }

//   return (
//     <section className='addTask'>
//       <form onSubmit={sub}>
//         <input type='text' name='task' value={task.name || ""} autoComplete='off' maxLength={25} onChange={e=>Settask({...task,name:e.target.value})}/>
//         <button type='submit'>{task.id?"Update":"Add"}</button>
//       </form>
//     </section>
//   )
// }

// export default Addtask

import React from 'react'

const Addtask = ({tasklist,Settasklist,task,Settask}) => {

const sub=(e)=>{
  e.preventDefault();
if(task.id){
const date=new Date();
const update=tasklist.map((todo)=>(todo.id===task.id?{id:task.id,name:e.target.task.value,time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:todo))
Settasklist(update)
Settask({})
}else{
  const date=new Date();
  const newtask={
    id:date.getTime(),
    name:e.target.task.value,
    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
  }
  Settasklist([...tasklist,newtask])
  Settask({})
}
}
  return (
<section className='addTask'>
  <form onSubmit={sub} >
    <input type='text' name='task' value={task.name||""} autoComplete='off' placeholder='Add Task' maxLength={25} onChange={e=>Settask({...task,name:e.target.value})} />
    <button type='submit'>Add</button>
  </form>
</section>
  )
}

export default Addtask





