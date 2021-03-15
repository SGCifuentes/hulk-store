import React from "react";

const Column = ({ description }) => {
  return (
    <div className="col-10 mx-auto col-lg-2">
      <p className="text-uppercase">{description}</p>
    </div>
  );
};

export default Column;