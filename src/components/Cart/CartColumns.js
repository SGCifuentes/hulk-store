import React from "react";
import Column from "./Column";

const CartColumns = () => {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <Column scope="col" description="Productos" />
        <Column scope="col" description="Nombre" />
        <Column scope="col" description="Precio" />
        <Column scope="col" description="Cantidad" />
        <Column scope="col" description="Quitar" />
        <Column scope="col" description="Total" />
      </div>
    </div>
  );
};

export default CartColumns;
