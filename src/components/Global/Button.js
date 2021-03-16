import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: ${(props) => (props.nav ? "none" : "0.05rem solid #5bb55b")};
  border-color: ${(props) => (props.cart ? "#ffa400" : "#5bb55b")};
  color: #5bb55b;
  color: ${(props) => (props.cart ? "#ffa400" : "#5bb55b")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: #5bb55b;
    background: ${(props) => (props.cart ? "#ffa400" : "#5bb55b")};
    color:${(props) => (props.nav ? "#001f01" : "#f4f4f4")} ;
  }
  &:focus {
    outline: none;
  }
`;
