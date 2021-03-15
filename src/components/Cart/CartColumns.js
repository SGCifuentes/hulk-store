import React from "react";
import Column from "./Column";

const CartColumns = () => {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <Column scope="col" description="products" />
        <Column scope="col" description="name of product" />
        <Column scope="col" description="price" />
        <Column scope="col" description="quantity" />
        <Column scope="col" description="remove" />
        <Column scope="col" description="total" />
      </div>
    </div>
  );
};

export default CartColumns;
