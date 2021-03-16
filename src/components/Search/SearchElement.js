import styled from "styled-components";

export const SearchBar = styled.form`
    width: 30% !important;
    border-radius: 5px;
  }
  #search {
    margin-right: 10px;
    width: 100%;
  }

  .fa-search {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    & {
      background-color: white;
      align-items: center;
    }

    #btn-search {
      display: none;
    }
    #search {
      margin: 0;
      background: transparent;
      border: none;
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
    label {
      margin-bottom: 0;
    }
    .fa-search {
      display: block;
      color: #001f01;
      font-size: 20px;
    }
  }
`;
