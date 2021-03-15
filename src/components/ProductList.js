import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { ProductWrap } from "./ProductElements";

const ProductList = () => {
  return (
    <React.Fragment>
      <ProductWrap className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => (
                  <Product key={product.id} product={product} />
                ));
              }}
            </ProductConsumer>
          </div>
        </div>
      </ProductWrap>
    </React.Fragment>
  );
};

export default ProductList;
