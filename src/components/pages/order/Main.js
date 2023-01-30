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
  padding-top: 50px;
  .product-container {
    justify-items: center;
    background: yellow;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 50px;
  }
`;
