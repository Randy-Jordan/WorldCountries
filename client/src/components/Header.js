import React from 'react'
import { toDark, toLight } from '../ChangePref';
import useLocalStorage from '../hooks/useLocalStorage';
import './Header.css'
const Header = () => {
  const [theme, setTheme] = useLocalStorage("theme");
  let button;
  console.log(theme)
  

  if(theme === 'dark'){
    button = <button className='light' onClick={()=> {setTheme('light'); toLight()}}><i className="fa-solid fa-sun"></i>Light Mode</button>
  }else{
    button = <button className='dark' onClick={()=> {setTheme('dark'); toDark()}}><i className="fa-solid fa-moon"></i>Dark Mode</button>
  }
  return (
    <header>
        <div className='logo'>
        <i className="fa-solid fa-globe"></i><h2>Where in the world?</h2>
        </div>
    {button}
    </header>
  )
}

export default Header