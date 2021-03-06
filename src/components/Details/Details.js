import React from "react";
import { ProductConsumer } from "../../context";
import { ButtonContainer } from "../Global/Button";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          id,
          company,
          img,
          info,
          price,
          title,
          inCart,
        } = value.DetailProduct;

        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                <h1>{title}</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h1>{title}</h1>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                   <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-green">
                  <strong>
                    precio : <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Información del producto :
                </p>
                <p className="text-muted lead">{info}</p>
                <div>
                  <Link to="/">
                    <ButtonContainer>Volver</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "Agregado" : "Agregar al carrito"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
