import React from "react";

const CartItem = ({ name, quantity, price }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <br />
    </div>
  );
};

export default CartItem;
