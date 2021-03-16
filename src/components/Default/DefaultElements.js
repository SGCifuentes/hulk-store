import styled from "styled-components";

export const ErrorPage = styled.div`
  background-color: #f5fff5;
  margin: auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  color: #6bb66b;
  .error {
    font-family: "Nunito Sans", sans-serif;
    font-size: 11rem;
    position: absolute;
    left: 22%;
    top: 8%;
  }

  .far {
    position: absolute;
    font-size: 8.5rem;
    left: 42%;
    top: 15%;
  }

  .error2 {
    font-family: "Nunito Sans", sans-serif;
    font-size: 11rem;
    position: absolute;
    left: 65%;
    top: 8%;
  }

  .mesagge {
    text-align: center;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.6rem;
    position: absolute;
    left: 16%;
    top: 45%;
    width: 75%;
  }

  a {
    color: #064206;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Container404 = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  align-items: flex-start;


`;
export const ContainerMsg = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  justify-content: space-between;
`;
