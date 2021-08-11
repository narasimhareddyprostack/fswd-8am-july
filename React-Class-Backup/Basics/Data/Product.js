import React from "react";
function Product() {
  let product_Name = "Iphone 5s";
  let product_Color = ["White", "Red", "Gray"];
  let product_image =
    "https://rukminim1.flixcart.com/image/312/312/j7qi9ow0/mobile/6/t/q/apple-iphone-6s-mn0w2hn-a-original-imaexw6smfzjgqsz.jpeg?q=70";
  let price = 37000;
  let more_Details = {
    usage: "...",
    desc: ".....",
    discount: "true",
  };
  return (
    <React.Fragment>
      <h4>{JSON.stringify(more_Details)}</h4>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <img src={product_image} />
              </div>
              <div className="card-body">
                <h4>{product_Name}</h4>
                <h5>{price}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Product;
