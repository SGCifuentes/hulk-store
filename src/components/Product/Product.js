import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import { Card, ProductWrapper } from "./ProductElements";

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;
  const title1 = title.split(" ", 2),
  title2 = title.split(" ").slice(2);

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <Card className="card">
        <ProductConsumer>
          {(value) => {
            return (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt={title} className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      agregado
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            );
          }}
        </ProductConsumer>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center text-capitalize mb-0"> {title1.join(' ')} <br/> {title2.join(" ")} </p>
          <h5 className="font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </Card>
    </ProductWrapper>
  );
};

export default Product;
