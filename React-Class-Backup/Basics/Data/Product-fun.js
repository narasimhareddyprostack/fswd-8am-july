import React from "react";
function Product() {
  let product_Name = "Iphone 5s";
  let product_Color = ["White", "Red", "Gray"];

  let price = 37000;
  let more_Details = {
    usage: "...",
    desc: ".....",
    discount: "true",
  };
  return (
    <>
      <h1>Product Name : {product_Name}</h1>
      <h2>Product Color: {product_Color[2]}</h2>
      <h3>Price Tag: {price}</h3>
      <h4>Discount:{more_Details.discount}</h4>
    </>
  );
}

export default Product;
