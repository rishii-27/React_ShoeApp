import React, { useState } from "react";

const ShowProducts = ({ item, getCart, id }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCartHandle = (event) => {
    event.preventDefault();
    const receivedDataFromCtx = {
      name: item.name,
      quantity: quantity,
      price: item.price,
      id: id
    };
    getCart(receivedDataFromCtx);
  };

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
    <div style={{ border: "1px solid black ", margin: "5px", padding: "10px" }}>
      <p>
        <strong>Name: </strong>
        {item.name}
      </p>
      <p>
        <strong>Quantity: </strong>
        <button onClick={decreaseQuantity}>-</button>
        {quantity}
        <button onClick={increaseQuantity}>+</button>
      </p>
      <p>
        <strong>Price: </strong>
        {item.price}
      </p>
      <p>
        <strong>Description: </strong>
        {item.description}
      </p>
      <div>
        <button onClick={addToCartHandle}>Add to Cart</button>
      </div>
      <br />
    </div>
  );
};

export default ShowProducts;
