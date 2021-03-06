import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Global/Button";

const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, cart, clearCart } = value;
  const emptyCart = cart.length === 0 ? true : false;

  return (
    <React.Fragment>
      {!emptyCart && (
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <Link to="/">
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => clearCart()}
                >
                  Limpiar carrito
                </button>
              </Link>
              <h5>
                <span className="text-title"> Subtotal :</span>{" "}
                <strong>$ {cartSubTotal} </strong>
              </h5>
              <h5>
                <span className="text-title"> Impuestos :</span>{" "}
                <strong>$ {cartTax} </strong>
              </h5>
              <h5>
                <span className="text-title"> Total :</span>{" "}
                <strong>$ {cartTotal} </strong>
              </h5>
              <Link to="/pay">
                <ButtonContainer>Completar pago</ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CartTotals;
