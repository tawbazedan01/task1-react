import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const [isProductVisible, setIsProductVisible] = useState(false);

  const product = {
    name: "iPhone 14",
    price: 1200,
    description: "A premium smartphone with advanced features"
  };

  const toggleProductDetails = () => {
    setIsProductVisible(!isProductVisible);
  };

  return (
    <div className='ps-3'>
      <div>
        <h1>Counter is {counter}</h1>
        <button onClick={increase} className="btn btn-success">Increase</button>
      </div>

      <div className="pt-3">
        <button onClick={toggleProductDetails} className="btn btn-danger">
          {isProductVisible ? "Hide Product Details" : "Show Product Details"}
        </button>
      </div>

      {isProductVisible ? (
        <div className="pt-3">
          <h2>Product Details:</h2>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      ) : null}
    </div>
  );
}
