import { useContext } from "react";
import creatcontext from "./Contaxt";
const Nav = () => {
  const{total, settotal,item,setitem } =useContext(creatcontext)
  return (
    <div className="nav">
      <h2>Shopping Cart</h2>

      <div className="cart-info">
        <h3>Total : ₹ {total}</h3>
        <h3>Items : {item}</h3>
      </div>
    </div>
  );
};

export default Nav;