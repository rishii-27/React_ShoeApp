import React, { useState } from "react";
import SellerForm from "./SellerForm";
import ShowProducts from "./ShowProducts";
import Cart from "./Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [product, setProduct] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addDataHandle = (data) => {
    const enteredData = {
      ...data,
    };
    console.log(enteredData);
    setProduct((preProducts) => [...preProducts, enteredData]);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <CartProvider>
      <h1>Seller Page</h1>
      <SellerForm onAddData={addDataHandle} />
      <h1>
        <button onClick={toggleCartVisibility}>Cart</button>
      </h1>
      {isCartVisible && <Cart />}
      <h1>Customer Page</h1>
      {product.map((newProduct) => (
        <ShowProducts
          id={newProduct.id}
          item={newProduct}
          // getCart={addTocartHandle}
        />
      ))}
    </CartProvider>
  );
}

export default App;
