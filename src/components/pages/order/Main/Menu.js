import React, { useState } from "react";
import styled from "styled-components";
import Product from "../../../reusable-ui/Product";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled>
      {menu.map((element) => (
        <Product
          key={element.id}
          title={element.title}
          image={element.imageSource}
          price={formatPrice(element.price)}
        />
      ))}
    </MenuStyled>
  );
}
const MenuStyled = styled.div`
  justify-items: center;
  display: grid;
  padding: 50px 50px 150px;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  background: ${theme.colors.background_white};
`;
