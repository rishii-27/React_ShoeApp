import React, { useState } from "react";

const ShowProducts = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("Quantity cannot be less than 1.");
    }
  };

  const increaseQuantity = () => {
    if (quantity < item.quantity) {
      setQuantity(quantity + 1);
    } else {
      alert("Quantity cannot exceed the available quantity.");
    }
  };

  return (
    <div>
      <p>Name: {item.name}</p>
      <p>
        Quantity:
        <button onClick={decreaseQuantity}>-</button>
        {quantity}
        <button onClick={increaseQuantity}>+</button>
      </p>
      <p>Description: {item.description}</p>
      <div>
        <button>Add to Cart</button>
      </div>
      <br />
    </div>
  );
};

export default ShowProducts;
