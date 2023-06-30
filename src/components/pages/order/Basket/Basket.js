import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import BasketFooter from "./BasketFooter";
import OrderContext from "../../../../context/OrderContext";
import { isEmpty } from "../../../../utils/array";
import { theme } from "../../../../theme";
import BasketBody from "./BasketBody/BasketBody";

export default function Basket() {
  const { basket, menuProducts } = useContext(OrderContext);
  const isBasketEmpty = isEmpty(basket);

  return (
    <BasketStyled>
      <Header label="Total" />
      <BasketBody isBasketEmpty={isBasketEmpty} menuProducts={menuProducts} />
      <BasketFooter label="Codé avec ❤️ et React.JS" demo="version démo" />
    </BasketStyled>
  );
}
const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border-radius: 0px 0px 0px 15px;
  box-shadow: ${theme.shadows.basket};
  background: ${theme.colors.background_white};
`;
