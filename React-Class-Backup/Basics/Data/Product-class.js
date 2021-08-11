import React from "react";
class Product extends React.Component {
  product_Name = "Iphone 5s";
  product_Color = ["White", "Red", "Gray"];

  price = 37000;
  more_Details = {
    usage: "...",
    desc: ".....",
    discount: "true",
  };
  render() {
    return (
      <>
        <h1>Proudct Name : {this.product_Name}</h1>
        <h3>Product Color:{this.product_Color[0]}</h3>
        <h4>Product Details:{this.more_Details.discount} </h4>
      </>
    );
  }
}

export default Product;
