import React,{useEffect,useState} from 'react';
import useFetch from '../hooks/useFetch'
import LazyLoad from 'react-lazyload';
import Card from './Card';
import './Card.css'


function Body() {
  const [filter,setFilter] = useState("")
  const [regFilter,setRegFilter] = useState("")
  const [{ response, error, isLoading }, doFetch] = useFetch('./fakeJSON/World.JSON');
  let first;
  let filteredCountries;
  

  useEffect(() => {
    doFetch()
    
  }, [doFetch])
  
  if(response){
      console.log(response)
      first = response.filter(item => item.name.common.toLowerCase().startsWith(filter.toLocaleLowerCase()))
      if(regFilter === ""){
        filteredCountries = first
      }else{
        filteredCountries = first.filter(item => item.region === regFilter)
      }
      
  }
  return (
   <>
   <div className='filters'>
     <form>
     <i className="fa-solid fa-magnifying-glass"></i>
     <input placeholder='Search for a country...'onChange={(ev)=> setFilter(ev.target.value)}></input>
     </form>
     <select onChange={(ev)=> setRegFilter(ev.target.value)}>
       <option value=""selected>Filter by Region</option>
       <option value="Africa">Africa</option>
       <option value="America">America</option>
       <option value="Asia">Asia</option>
       <option value="Europe">Europe</option>
       <option value="Oceania">Oceania</option>
     </select>
   </div>
   <main>
     
   {response && filteredCountries.map((item,i) => 
                                  <LazyLoad
                                  key={i}
                                  height={100}
                                  offset={[-100, 100]}
                                  
                                >
                                  <Card src={item.flags.svg} 
                                        name={item.name.common}
                                        pop={item.population}
                                        region={item.region}
                                        cap={item.capital}
                                        key={i}
                                        />
                                  </LazyLoad>)}
   </main>
   
  </>
   
  );
}

export default Body;