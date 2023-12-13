import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.png"

export default function Header() {
  const [theme,Setthem]=useState('light');

  useEffect(()=>{
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  },[theme])

  return (
    <header>
        <div className='logo'>
    <img src={Logo} alt='Taskmate Logo'/>
    <span>TaskMate</span>
        </div>

        <div  className='themeSelector'>
        <span onClick={()=>Setthem("light")} className='light '></span>
        <span onClick={()=>Setthem("medium")} className='medium'></span>
        <span onClick={()=>Setthem("dark")} className='dark activetheme'></span>
        <span onClick={()=>Setthem("gOne")} className='gOne'></span>
        <span onClick={()=>Setthem("gTwo")} className='gTwo'></span>
        <span onClick={()=>Setthem("gThree")} className='gThree'></span>
        </div>
    </header>
  )
}

