import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../Store/cart-context";

const Cart = () => {
  const cartCtx = useContext(CartContext)

  const calculateTotalAmount = () => {
    return cartCtx.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <strong>Total Amount: ₹ {calculateTotalAmount()}</strong>
    </>
  );
};

export default Cart;
