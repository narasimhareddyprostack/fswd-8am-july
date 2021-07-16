function order(product_Name, price, color, delivery_Date) {
  return (
    product_Name +
    "  " +
    " Price :" +
    price +
    100 +
    " " +
    "Color:" +
    color +
    "Delivery Date:" +
    delivery_Date
  );
}

let result = order("Iphone 5s", 5000, "red");
console.log(result);
