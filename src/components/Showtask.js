
// import React from 'react'

// const Showtask = ({tasklist,Settasklist,task,Settask}) => {
// const handleedit=(id)=>{
//   const selectedTask=tasklist.find(todo=>todo.id===id);
//   Settask(selectedTask);
// }

// const handleDel=(id)=>{
//   Settasklist(tasklist.filter(tasklist=> tasklist.id!=id))
// }

//   return (
// <section className='showTask'>
//   <div className='head'>
//     <div>
//       <span className='title'>Toda</span>
//       <span className='count'>{tasklist.length}</span>
//     </div>
//     <button className='clearAll' onClick={()=>Settasklist([])}>Clear All</button>
//   </div>
//   <ul>
//     {
//       tasklist.map((todo)=>(
//         <li key={todo.id}>
//           <p>
//             <span className='name' >{todo.name}</span>
//             <span className='time'>{todo.time}</span>
//           </p>
//           <i onClick={()=>handleedit(todo.id)} className='bi bi-pencil-square'></i>
//           <i onClick={()=>handleDel(todo.id)} className='bi bi-trash'></i>

//         </li>
//       ))
//     }
//   </ul>
// </section>
//   )
// }

// export default Showtask

import React from 'react'

const Showtask = ({tasklist,Settasklist,task,Settask}) => {

const handleEdit=(id)=>{
  const selectedTask=tasklist.find(todo=>todo.id===id);
  Settask(selectedTask)
}

  const handelDel=(id)=>{
    Settasklist(tasklist.filter(tasklist=>tasklist.id!=id))
    
  }
  return (
<section className='showTask'>
  <div className='head'>
    <div>
    <span className='title'>Todo</span>
    <span className='count'>0</span>
    </div>
    <button className='clearAll' onClick={()=>Settasklist([])}> Clear All</button>
  </div>
  <ul>
    {
      tasklist.map((todo)=>(
        <li key={todo.id}>
          <p>
          <span>{todo.name}</span>
          <span>{todo.time}</span>
          </p>
          <i className='bi bi-pencil-square' onClick={()=>handleEdit(todo.id)}></i>
          <i className='bi bi-trash' onClick={()=>handelDel(todo.id)}></i>
        </li>
      ))
    }
  </ul>
</section>
  )
}

export default Showtask

