import React from "react";
import CompB from "./CompB";
class CompA extends React.Component {
  product_Name = "Iphone 5S";
  price = 50000;
  color = ["White", "Black", "red"];
  more_Details = {
    usage: "Apple iPhone 5s smartphone. Announced Sep 2013.",
    desc:
      "Apple iPhone 5s smartphone. Announced Sep 2013. Features 4.0″ display, Apple A7 chipset, 8 MP primary camera, 1.2 MP front camera, 1560 mAh battery,",
  };
  render() {
    return (
      <>
        <h1>CompA - React Component </h1>
        <hr />
        <CompB
          name={this.product_Name}
          wish="Good Morning"
          price={this.price}
          product_Color={this.color}
          details={this.more_Details}
        />
      </>
    );
  }
}
export default CompA;
