import React from "react";
import styled from "styled-components";

export default function Product() {
  return (
    <ProductStyled>
      <span>Product</span>
    </ProductStyled>
  );
}
const ProductStyled = styled.div`
  background: green;
  border: 1px solid red;
  width: 240px;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: orange;
  }
`;
