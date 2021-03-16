import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import ProductList from "./components/Product/ProductList";
import Details from "./components/Details/Details";
import Default from "./components/Default/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal/Modal";
import { GlobalStyle } from "./globalStyle";
import page from "./components/Cart/PayPage";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path='/pay' component={page} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
};

export default App;
