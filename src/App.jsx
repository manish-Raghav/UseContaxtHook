import Nav from "./Component/Nav";
import Itemcard from "./Component/Itemcard";
import "./App.css";
import { useState } from "react";
import creatcontext from "./Component/Contaxt";

function App() {
  const [total,settotal] =useState(0)
  const[item,setitem] =useState(0)
  return (
   <creatcontext.Provider value={{ total, settotal,item,setitem }}>
    <div className="app">
      <Nav />
      <Itemcard />
    </div>
    </creatcontext.Provider>
  );
}

export default App;