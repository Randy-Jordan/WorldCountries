import Header from "./components/Header";
import Body from "./components/Body";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect } from "react";
import {toDark,toLight} from './ChangePref.js'


function App() {
  const [theme, setTheme] = useLocalStorage("theme",'');
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
      if(darkThemeMq){
        toDark();
        setTheme('dark')
        
      }else{
        toLight();
        setTheme('light')
      }
  }, [darkThemeMq,setTheme])
  

  return (
    <>
    <Header />
    <Body />
    </>
  );
}

export default App;
