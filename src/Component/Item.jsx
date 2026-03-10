import { useContext } from "react";
import creatcontext from "./Contaxt";


const Item = ({name,price}) => {
  const{total, settotal,item,setitem } =useContext(creatcontext)
  const Additem =()=>{
      settotal((pre)=>pre+price)
      setitem((pre)=>pre+1)

  }
   const removeitem =()=>{
     if(total>=price && item>0)
     {
      settotal((pre)=>pre-price)
      setitem((pre)=>pre-1)
     }
     else{
      alert("no item in cart")
     }

  }
  return (
    <div className="item">
      <h2>{name}</h2>
      <h3>₹ {price}</h3>

      <div className="buttons">
        <button onClick={Additem}>Add</button>
        <button onClick={removeitem}>Remove</button>
      </div>
    </div>
  );
};

export default Item;