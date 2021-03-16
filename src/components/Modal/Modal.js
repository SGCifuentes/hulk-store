import React from "react";
import { ProductConsumer } from "../../context";
import { ButtonContainer } from "../Global/Button";
import { ModalContainer } from "./ModalElements";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;
        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                    id="modal"
                  >
                    <h5>Producto agregado al carrito</h5>
                    <img src={img} className="img-fluid" alt="" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price : ${price}</h5>
                    <Link to="/">
                      <ButtonContainer onClick={() => closeModal()}>
                        Continuar comprando
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer cart onClick={() => closeModal()}>
                        ir al carrito
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Modal;
