import styled from "styled-components";

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: #c8f7c5 !important;
    border-top: 1px solid #adffad;
    transition: all 0.5s linear;
  }
  .img-container {
   background: #f5fff5;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.3s linear;

  }
  .img-container:hover .card-img-top {
    transform: scale(1.4);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: #98FB98;
    border: none;
    color: #005903;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.2s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    background: #005903;
    color: #98FB98;
    cursor: pointer;
  }
`;

export const ProductWrap = styled.section``;

export const Card = styled.div`
  min-height: 325px;
  max-height: 325px;
  .card-footer {
    color: #001f01 !important;
    background: #5beb67;
    display: block !important;
  }
`