import React from 'react'
import { toDark, toLight } from '../ChangePref';
import useLocalStorage from '../hooks/useLocalStorage';
import './Header.css'
const Header = () => {
  const [theme, setTheme] = useLocalStorage("theme");
  let button;

  

  if(theme === 'dark'){
    button = <button className='light' onClick={()=> {setTheme('light'); toLight()}}><i className="fa-solid fa-sun"></i>Light</button>
  }else{
    button = <button className='dark' onClick={()=> {setTheme('dark'); toDark()}}><i className="fa-solid fa-moon"></i>Dark</button>
  }
  return (
    <header>
        <div className='container'>
        <div className='logo'>
        <i className="fa-solid fa-globe"></i><h2>Where in the world?</h2>
        </div>
    {button}
        </div>
    </header>
  )
}

export default Header