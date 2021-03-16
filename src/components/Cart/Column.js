import React from "react";
import { CartColumn } from "./CartElements";

const Column = ({ description }) => {
  return (
    <CartColumn className="col-10 mx-auto my-5 py-3 col-lg-2">
      <p className="text-uppercase my-0">{description}</p>
    </CartColumn>
  );
};

export default Column;
