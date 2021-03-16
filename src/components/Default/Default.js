import React from "react";
import { Link } from "react-router-dom";
import { Container404, ContainerMsg, ErrorPage } from "./DefaultElements";

const Default = () => {
  return (
    <ErrorPage className="mainbox py-5">
      <Container404 className="my-5">
        <div className="error">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="error2">4</div>
      </Container404>
      <ContainerMsg>
        <div className="mesagge">
          Quizas esta pagina ha cambiado, tal vez la borraron, o estará
          escondida por la cuarentena. Tal vez solo sea que nunca existio?
          <p>
            No pasa nada, ve al <Link to="/">inicio</Link> e intenta acceder desde alli.
          </p>
        </div>
      </ContainerMsg>
    </ErrorPage>
  );
};

export default Default;
