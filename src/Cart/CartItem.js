import React, { useContext } from "react";
import CartContext from "../Store/cart-context";

const CartItem = ({ name, quantity, price, id }) => {
  
  const cartCtx = useContext(CartContext);

  const removeHandle = () => {
    cartCtx.removeItem(id);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <button onClick={removeHandle}>Remove</button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;
