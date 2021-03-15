import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setproducts] = useState([]);
  const [DetailProduct, setdetailProduct] = useState(detailProduct);
  const [cart, setcart] = useState([]);
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalProduct, setmodalProduct] = useState(detailProduct);
  const [cartSubTotal, setcartSubTotal] = useState(0);
  const [cartTax, setcartTax] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);

  useEffect(() => setProducts(), []);

  const setProducts = () => {
    let templateProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      templateProducts = [...templateProducts, singleItem];
    });
    setproducts(() => templateProducts);
  };

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };
  const handleDetail = (id) => {
    const product = getItem(id);
    setdetailProduct(() => product);
  };
  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setproducts(() => tempProducts);
    setcart(() => [...cart, product]);
  };

  useEffect(() => {
    addTotals();
  }, [cart]);

  const openModal = (id) => {
    const product = getItem(id);
    setmodalProduct(() => product);
    setmodalOpen(() => true);
  };
  const closeModal = () => {
    setmodalOpen(() => false);
  };
  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count += 1;
    product.total = product.count * product.price;
    setcart(() => [...tempCart]);
  };
  useEffect(() => {
    addTotals();
  }, []);
  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count -= 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setcart(() => [...tempCart]);
    }
  };
  const getTotals = () => {
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total,
    };
  };
  const addTotals = () => {
    const totals = getTotals();
    setcartSubTotal(() => totals.subTotal);
    setcartTax(() => totals.tax);
    setcartTotal(() => totals.total);
  };
  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setcart(() => [...tempCart]);
    setproducts(() => [...tempProducts]);
    addTotals();
  };
  const clearCart = () => {
    const tempProducts = products;
    tempProducts.forEach((product) => {
      product.inCart = false;
      product.count = 0;
      product.total = 0;
    });
    setcart(() => []);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        DetailProduct,
        cart,
        modalOpen,
        modalProduct,
        cartSubTotal,
        cartTax,
        cartTotal,
        handleDetail,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
