import React from 'react'
import Product from './Product';


const Home = () => {
const arr = [1,2,3,4];

  return (
    <div>
      {
          arr.map(i=>(
            <Product value={i} key={i}/>
          ))
      }
    </div>
  )
}

export default Home

// npm i react-router-dom@6.4.2
