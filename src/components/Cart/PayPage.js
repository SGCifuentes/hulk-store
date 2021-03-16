import React from "react";
import { ButtonContainer } from "../Global/Button";

const PayPage = () => {
  return (
    <div className="">
      <div className="container">
        <main>
          <div className="py-3">
            <form
              className="needs-validation"
              onSubmit={(e) =>
                e.preventDefault() ||
                alert("Gracias por tú comprar", (window.location.href = "/"))
              }
              noValidate=""
            >
              <h4 className="mb-3">Datos de envío</h4>
              <div className="row">
                <div className=" col-sm-6 my-2">
                  <label htmlFor="firstName" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="lastName" className="form-label">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    required
                  />
                </div>
                <div className="col-6 my-2">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div className="col-6 my-2">
                  <label htmlFor="address" className="form-label">
                    Direccióm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Cll 123 # 123 - 123"
                    required
                  />
                </div>
              </div>
              <hr className="my-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    defaultChecked
                    required
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Tarjeta de Credito
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Tarjeta Debito
                  </label>
                </div>
              </div>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Nombre en la tarjeta
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    required
                  />
                  <small className="text-muted mb-3">
                    Nombre completo como aparece en la tarjeta
                  </small>
                </div>
                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Numero de tarjeta
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    maxLength="15"
                    minLength="15"
                    id="cc-number"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Fecha de expedicióm
                  </label>
                  <input
                    type="date"
                    autoComplete="cc-exp"
                    className="form-control"
                    id="cc-expiration"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="number"
                    autoComplete="cc-csv"
                    maxLength="3"
                    minLength="3"
                    className="form-control"
                    id="cc-cvv"
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="my-4" />
              <ButtonContainer className="w-25 btn btn-primary btn-lg" type="submit">
                Pagar
              </ButtonContainer>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};
export default PayPage;
