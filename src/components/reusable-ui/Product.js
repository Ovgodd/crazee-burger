import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Product() {
  return (
    <ProductStyled>
      <span>Product</span>
    </ProductStyled>
  );
}
const ProductStyled = styled.div`
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  width: 240px;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.extraRound};
  span {
    color: orange;
  }
`;
