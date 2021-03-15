import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";
import EmptyCart from "./EmptyCart";

const Store = () => {
  return (
    <section>
      <ProductConsumer className="table">
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <>
                <Title name="your" title="cart" />
                <CartColumns className="thead-dark" />
                <CartList value={value} />
                <CartTotals value={value} history={window.history} />
              </>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Store;
