import React, { useState } from "react";

const SellerForm = (props) => {
  const [productName, setProductName] = useState("");
  const [productQty, setProductQty] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const nameChangeHandle = (event) => {
    setProductName(event.target.value);
  };
  const qtyChangeHandle = (event) => {
    setProductQty(event.target.value);
  };
  const descriptionChangeHandle = (event) => {
    setProductDescription(event.target.value);
  };

  const submitHandle = (event) => {
    event.preventDefault();

    const enteredData = {
      name: productName,
      quantity: productQty,
      description: productDescription,
    };

    props.onAddData(enteredData);
    setProductName("");
    setProductQty("");
    setProductDescription("");
  };

  return (
    <>
      <form onSubmit={submitHandle}>
        <div>
          <label>Product name: </label>
          <input
            type="text"
            value={productName}
            onChange={nameChangeHandle}
            required
          />
        </div>
        <br />
        <div>
          <label>Quantity: </label>
          <input
            type="number"
            value={productQty}
            onChange={qtyChangeHandle}
            min="1"
            max="10"
            required
          />
        </div>
        <br />
        <div>
          <label>Description: </label>
          <input
            type="text"
            value={productDescription}
            onChange={descriptionChangeHandle}
            required
          />
        </div>
        <br />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
};

export default SellerForm;
