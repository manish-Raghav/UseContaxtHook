import React from 'react'
import { useContext } from 'react'
import { coxt } from './App'

const Child = () => {
 const k=   useContext(coxt);
  return (
    <div>
      <h2> i am here to in for you that is have use every thing in this learning mode {k}</h2>
    </div>
  )
}

export default Child
