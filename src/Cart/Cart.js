import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ items }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <strong>Total Amount: ₹ {calculateTotalAmount()}</strong>
    </>
  );
};

export default Cart;
