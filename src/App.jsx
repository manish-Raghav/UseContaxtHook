import { createContext, useState } from 'react'
import Parent from './Parent'

 export  const coxt = createContext()
function App() {
  const [count, setCount] = useState("Manish")
  

  return (
    <>
      <h1>
        here i am pasiing state to parant using contact
      </h1>
      <coxt.Provider value={count}>
      <Parent />
      </coxt.Provider>
    </>
  )
}

export default App
