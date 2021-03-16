import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    outline: none;
  }
  body {
    background: #f3f3f3;
    color: #232528 !important;
    overflow-x: hidden;
  }
  .text-title {
    letter-spacing: 0.3rem;
    text-transform: uppercase;
  }
  .text-green {
    color: #005903;
  }
  .btn-black {
  background: transparent;
  text-transform: capitalize;
  font-size: 0.8rem !important;
  color: #232528;
  border-radius: 0 !important;
  border: 0.1rem solid #232528 !important;
  }
  .btn-black:hover {
  background: #003c02 !important;
  color: #f3f3f3 !important;
  }
  .cart-icon {
  cursor: pointer;
  font-size: 1.2rem;
  color: #f80000;
}
`;
