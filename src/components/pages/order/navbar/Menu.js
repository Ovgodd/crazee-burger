import React, { useState } from "react";
import styled from "styled-components";
import Product from "../../../reusable-ui/Product";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
  const [menu] = useState(fakeMenu2);
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
`;
