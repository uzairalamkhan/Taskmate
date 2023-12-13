import './App.css';
import Header from "./components/Header"
import Addtask from "./components/Addtask"
import Showtask from "./components/Showtask"
import { useEffect, useState } from 'react';

function App() {
  const [tasklist,Settasklist]=useState(JSON.parse(localStorage.getItem("tasklist")) || [] );
  const [task,Settask]=useState({});

  useEffect(()=>{
    localStorage.setItem("tasklist" , JSON.stringify(tasklist))
  },[tasklist])

  return (
    <div className="App">
      <Header/>
      <Linkddtask 
      tasklist={tasklist} Settasklist={Settasklist}
      task={task}
      Settask={Settask}
      />
      <Showtask
       tasklist={tasklist} Settasklist={Settasklist}
       task={task}
       Settask={Settask}
       />
    </div>
  );
}

export default App;
