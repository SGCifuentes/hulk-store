import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #001f01;
  max-height: 80px;
  justify-content: space-between !important;

  .navbar-brand {
    max-width: 250px;
  }

  @media only screen and (max-width: 768px) {
    .navbar-brand {
      max-width: 150px;
    }
  }
`;
