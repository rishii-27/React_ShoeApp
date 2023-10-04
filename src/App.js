import React, { useState } from "react";
import SellerForm from "./SellerForm";
import ShowProducts from "./ShowProducts";
// Create a shoe react app using useContext where the seller adds the product name, description, price, quantity available for small, medium, and large, and the add product button. On clicking on add product," the customer portal should be displayed below, which will show products added by the seller, including description, price, and quantity of small, medium, and large available, with an "add to cart button. Also, create a cart icon such that the added quantity is displayed in the card with the "Buy Now" button. Make sure once the customer adds any size of shoe in cart quantity should be reduced by 1 and if its already less than one that quantity should not respond

function App() {
  const [product, setProduct] = useState([]);
  const addDataHandle = (data) => {
    const enteredData = {
      ...data,
      id: Math.random(),
    };
    console.log(enteredData);
    setProduct((preProducts) => [...preProducts, enteredData]);
  };

  return (
    <div className="App">
      <h1>Seller Page</h1>
      <SellerForm onAddData={addDataHandle} />
      <h1>Customer Page</h1>
      {product.map((newProduct) => (
        <ShowProducts id={newProduct.id} item={newProduct} />
      ))}
    </div>
  );
}

export default App;
