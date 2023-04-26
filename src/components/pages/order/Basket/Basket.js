import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { formatPrice } from "../../../../utils/maths";
import BasketProducts from "./BasketProducts";
import OrderContext from "../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";

export default function Basket() {
  const { basket } = useContext(OrderContext);

  const isBasketEmpty = basket.length === 0;
  return (
    <BasketStyled>
      <Header label="Total" amountToPay={formatPrice(0)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} />}
      <Footer label="Codé avec ❤️ et React.JS" />
    </BasketStyled>
  );
}
const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 0px 0px 0px 15px;
`;
