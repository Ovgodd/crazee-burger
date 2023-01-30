import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Product from "../../reusable-ui/Product";

export default function Main() {
  return (
    <MainStyled>
      <div className="product-container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </MainStyled>
  );
}
const MainStyled = styled.div`
  height: 90vh;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  background: red;
  .product-container {
    justify-items: center;
    background: yellow;
    display: grid;
    padding: 50px 50px 150px;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
  }
`;
