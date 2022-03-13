import React from 'react'


const Card = ({src,name,pop,region,cap,i}) => {
    
  return (
    <article key={i}>
        <img src={src} alt={`Flag of ${name}`}/>
        <div className='details'>
            <h3>{name}</h3>
            <h5>Population:<span>{pop.toLocaleString("en-us")}</span></h5>
            <h5>Region:<span>{region}</span></h5>
            <h5>Capital:<span>{cap}</span></h5>
        </div>

        
    </article>
  )
}

export default Card