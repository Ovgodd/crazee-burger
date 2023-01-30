import React, { useState } from "react";
import styled from "styled-components";
import Product from "../../../reusable-ui/Product";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled>
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
    </MenuStyled>
  );
}
const MenuStyled = styled.div`
  justify-items: center;
  display: grid;
  padding: 50px 50px 150px;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
`;
